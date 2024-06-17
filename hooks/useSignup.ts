import AuthService from "@/entities/auth/AuthService";
import { UserInfo } from "@/entities/auth/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useStore from "./useAlert";

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const openAlert = useStore((state) => state.openAlert); // 알림 창을 열기 위한 상태
  const mutation = useMutation({
    mutationFn: (data: UserInfo) => AuthService.postSignUp(data),
    onSuccess: (data) => {
      console.log("mutation", data);
      router.push("/");
    },
    onError: (error) => {
      openAlert();
      console.error(error);
    },
  });

  return mutation;
};
