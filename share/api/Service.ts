import axios, { AxiosInstance } from "axios";

class Service {
  protected http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credenials": true,
        "ngrok-skip-browser-warning": true,
      },
    });

    // 요청 인터셉터 추가
    this.http.interceptors.request.use(
      (config) => {
        // 토큰을 로컬 스토리지에서 가져옵니다.
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  protected async get<T>(url: string, params?: any): Promise<T> {
    const response = await this.http.get<T>(url, { params });
    return response.data;
  }

  protected async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.http.post<T>(url, data);
    return response.data;
  }

  setAuthToken(token: string) {
    if (token) {
      localStorage.setItem("acess", token);
    }
  }
}

export default Service;
