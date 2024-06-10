import AuthService from "@/entities/auth/AuthService";
import { User } from "@/entities/auth/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: User) => AuthService.login(data),
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  return mutation;
};
