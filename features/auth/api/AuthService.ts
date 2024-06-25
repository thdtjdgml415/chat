import Service from "../../../share/api/Service";
import { SuccessLoginData, User, UserInfo } from "../model/auth";

class AuthService extends Service {
  // 로그인 클래스 함수
  login({ loginId, password }: User): Promise<SuccessLoginData> {
    return this.post("api/member/login", { loginId, password });
  }

  // 구글 로그인 클래스 함수
  googleLogin() {
    // /api/member/login/google
    return this.post("/api/member/login/google");
  }

  // 회원가입 클래스 함수
  postSignUp(data: UserInfo) {
    return this.post("api/member/signup", data);
  }

  // 정보 수정
  getUserInfo() {
    return this.get("/api/member/user");
  }
}

export default new AuthService();
