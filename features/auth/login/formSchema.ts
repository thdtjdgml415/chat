import { z } from "zod";

export const formSchema = z.object({
  id: z.string().min(2, {
    message: "아이디를 입력해주세요",
  }),
  password: z.string().min(8, {
    message:
      "비밀번호는 최소 8자리 이상 영문자와 특수문자를 포함한 8자리 이상 입력해주세요!",
  }),
});
