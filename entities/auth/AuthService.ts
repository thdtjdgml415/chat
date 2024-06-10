import Service from "../Service";
import { User, UserInfo } from "./model";

class AuthService extends Service {
  // 로그인 클래스 함수
  login({ id, password }: User) {
    console.log(id, password);
    return this.post("/login", { id, password });
  }

  // 구글 로그인 클래스 함수
  googleLogin() {
    // /api/member/login/google
    return this.post("/api/member/login/google");
  }

  // 회원가입 클래스 함수
  postSignUp(data: UserInfo) {
    console.log(data);
    return this.post("/api/member/signup", { data });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
