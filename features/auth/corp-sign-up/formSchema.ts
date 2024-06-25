import { z } from "zod";

// loginid: "",
// password: "",
// name: "",
// birthDate: "",
// email: "",
export const formSchema = z.object({
  loginId: z.string().min(2, {
    message: "아이디를 입력해주세요",
  }),
  password: z
    .string()
    .min(8, {
      message: "비밀번호는 최소 8자리 이상이어야 합니다.",
    })
    .max(20, {
      message: "비밀번호는 최대 20자리 이하로 입력해주세요!",
    })
    .refine((value) => /[a-zA-Z]/.test(value), {
      message: "비밀번호에는 영문자가 포함되어야 합니다.",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "비밀번호에는 숫자가 포함되어야 합니다.",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "비밀번호에는 특수문자가 포함되어야 합니다.",
    }),
  name: z.string(),
  gender: z.string(),
  birthDate: z.date().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    {
      message: "유효한 날짜를 입력해주세요.",
    }
  ),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  ceoName: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  companyName: z
    .string()
    .min(8, {
      message: "비밀번호는 최소 8자리 이상이어야 합니다.",
    })
    .max(20, {
      message: "비밀번호는 최대 20자리 이하로 입력해주세요!",
    }),
  businessId: z.string(),
  companyCertificateNumber: z
    .string()
    .length(20, { message: "최소 20자리의 번호를 입력해주세요" }),
});