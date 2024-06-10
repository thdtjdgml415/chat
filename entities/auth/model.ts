export interface User {
  id: string;
  password: string;
}

//회원가입 데이터
export interface UserInfo {
  loginid: string;
  password: string;
  name: string;
  gender: string;
  birthDate: Date | string;
  email: string;
}
