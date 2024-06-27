import AuthService from "@/features/auth/api/AuthService";
import { CorpUserInfo, UserInfo } from "@/features/auth/model/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useStore from "../../../hooks/useAlert";
import { AxiosError } from "axios";

export const useSignUp = () => {
  const router = useRouter();
  const openAlert = useStore((state) => state.openAlert); // 알림 창을 열기 위한 상태
  const mutation = useMutation({
    mutationFn: (data: UserInfo | CorpUserInfo) => AuthService.postSignUp(data),
    onSuccess: (data: UserInfo | CorpUserInfo) => {
      console.log("success sign up data -", data);
      router.push("/sign-in");
    },
    onError: (error: AxiosError<any, any>) => {
      if (error.isAxiosError && error.response) {
        openAlert(error?.response?.data.message);
      } else {
        openAlert("An unexpected error occurred");
      }
      console.error("Signup error:", error);
    },
  });

  return mutation;
};
