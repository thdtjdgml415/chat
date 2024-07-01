import Service from "@/share/api/Service";
import AuthService from "@/features/auth/api/AuthService";
import { SuccessLoginData, User } from "@/features/auth/model/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useQueryGetChatRoomList } from "@/features/chat/hooks/useQueryGetChatRoomList";

export const useLogin = () => {
  const service = new Service();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: User): Promise<SuccessLoginData> =>
      AuthService.login(data),
    onSuccess: ({ data }: SuccessLoginData) => {
      console.log("suceess login data -", data);
      if (data) {
        service.setAuthToken(data.tokenInfo.accessToken);
        service.setAuthRefreshToken(data.tokenInfo.refreshToken);
        localStorage.setItem("role", data.role);
      }
      router.push("/chat/chatroom");
    },
    onError: (error: AxiosError) => {
      console.error("Login failed", error);
    },
  });

  return mutation;
};
