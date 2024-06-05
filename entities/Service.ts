import axios, { AxiosInstance } from "axios";

class Service {
  protected http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credenials": true,
        "ngrok-skip-browser-warning": true,
      },
    });
  }

  protected async get<T>(url: string, params?: any): Promise<T> {
    const response = await this.http.get<T>(url, { params });
    return response.data;
  }

  protected async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.http.post<T>(url, data);
    return response.data;
  }
}

export default Service;
