import Service from "@/share/api/Service";
import AuthService from "@/features/auth/api/AuthService";
import { SuccessLoginData, User } from "@/features/auth/model/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const service = new Service();
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: User): Promise<SuccessLoginData> =>
      AuthService.login(data),
    onSuccess: ({ data }: SuccessLoginData) => {
      console.log("suceess login data -", data);
      if (data) {
        service.setAuthToken(data.tokenInfo.accessToken);
      }
      router.push("/chat/chatroom");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  return mutation;
};
