import Service from "../Service";
import { User } from "./model";

class AuthService extends Service {
  login({ id, password }: User) {
    console.log(id, password);
    return this.post("/login", { id, password });
  }
  googleLogin() {
    // /api/member/login/google
    return this.post("/api/member/login/google");
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
