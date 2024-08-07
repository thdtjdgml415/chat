import axios, { AxiosResponse } from "axios";
import Service from "../../../share/api/Service";
import { SuccessLoginData, User, UserInfo } from "../model/auth";
import { useRouter } from "next/navigation";

class AuthService extends Service {
  // 로그인 클래스 함수
  async login({ loginId, password }: User): Promise<SuccessLoginData> {
    return this.post("api/member/login", { loginId, password });
  }

  // 구글 로그인 클래스 함수
  googleLogin() {
    // /api/member/login/google
    return this.post("/api/member/login/google");
  }

  // 회원가입 클래스 함수
  async postSignUp<TUserInfo>(data: TUserInfo): Promise<TUserInfo> {
    console.log(data);
    try {
      return await this.post<TUserInfo>("api/member/signup", data);
      // `post` 메서드가 `AxiosResponse<UserInfo>`를 반환한다고 가정
    } catch (error) {
      // Axios 오류를 재던지기
      throw error;
    }
  }

  async getRefresh(data: string) {
    try {
      return await this.get("/api/member/reissue-token", data);
    } catch (error) {
      throw error;
    }
  }
  // "api/member/logout"
  getOut() {
    return this.getLogOut("api/member/logout");
  }

  // 정보 수정
  getUserInfo() {
    return this.get("/api/member/user");
  }
}

export default new AuthService();
