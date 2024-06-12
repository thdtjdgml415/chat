import { z } from "zod";

// name: "",
// birthDate: "",
// email: "",
export const formSchema = z.object({
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
});
