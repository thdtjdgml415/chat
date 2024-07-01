import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

class Service {
  protected http: AxiosInstance;
  protected multi: AxiosInstance;
  protected image: AxiosInstance;

  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    this.http = this.createInstance(baseURL!, "application/json");
    this.multi = this.createInstance(baseURL!, "multipart/form-data");
    this.image = this.createInstance(baseURL!, "multipart/form-data", "blob");
  }

  private createInstance(
    baseURL: string,
    contentType: string,
    responseType: "json" | "blob" = "json"
  ): AxiosInstance {
    const instance = axios.create({
      baseURL,
      timeout: 1000,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Credenials": true,
      },
      responseType,
    });

    instance.interceptors.request.use(
      (config) => {
        console.log("config ------------", config);
        const authToken = localStorage.getItem("access");
        if (authToken) {
          const newConfig = { ...config };
          newConfig.headers.Authorization = `Bearer ${authToken}`;
          return newConfig;
        }
        return config;
      },
      (error) => {
        console.error("instance.interceptors.request.use", error);
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      async (response) => {
        if (response.status === 404) {
          console.log("404 페이지로 넘어가야 함!");
        }

        return response;
      },

      async (error) => {
        console.log("instance.interceptors.response.use -----", error);
        if (error.response && error.response.status === 401) {
          console.log("401 error find");
          const data = error.response.data;
          if (data.error === "Unauthorized") {
            const refresh = localStorage.getItem("refresh");
            console.log("refresh", refresh);
            if (refresh) {
              try {
                console.log("is refresh?");
                const response = await axios.get(
                  `${baseURL}/api/member/reissue-token`,
                  {
                    headers: {
                      Authorization: `Bearer ${refresh}`,
                    },
                  }
                );
                console.log("accessToken", response);
                // 새 토큰을 localStorage에 저장
                localStorage.setItem("access", response.data.accessToken);
              } catch (refreshError) {
                console.error("Refresh token request failed:", refreshError);
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }

  protected async get<T>(url: string, params?: any): Promise<T> {
    const response = await this.http.get<T>(url, { params });
    return response.data;
  }

  protected async getImage(url: string, params?: any) {
    const response = await this.image.get<Blob>(url, { params });
    return window.URL.createObjectURL(response.data);
  }

  protected async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.http.post<T>(url, data);
    return response.data;
  }

  protected async put<T>(url: string, data?: T): Promise<T> {
    const response = await this.multi.put<T>(url, data);
    return response.data;
  }

  setAuthToken(token: string) {
    localStorage.setItem("access", token);
  }
  setAuthRefreshToken(token: string) {
    localStorage.setItem("refresh", token);
  }
}

export default Service;
