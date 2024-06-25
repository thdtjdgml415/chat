import AuthService from "@/features/auth/api/AuthService";
import { UserInfo } from "@/features/auth/model/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useStore from "./useAlert";

export const useSignUp = () => {
  const router = useRouter();
  const openAlert = useStore((state) => state.openAlert); // 알림 창을 열기 위한 상태
  const mutation = useMutation({
    mutationFn: (data: UserInfo) => AuthService.postSignUp(data),
    onSuccess: (data) => {
      console.log("success sign up data -", data);
      router.push("/sign-in");
    },
    onError: (error: any) => {
      openAlert(error.response.data.message);
      console.error(error);
    },
  });

  return mutation;
};
