import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ConfigService from "../api/ConfigService";

export const useQueryGetAccountData = () => {
  const { data, error, isPending, isLoading } = useQuery<any>({
    queryKey: ["configAccount"],
    queryFn: () => ConfigService.getAccountConfigData(),
    select: (data) => data.data, // 여기에서 원하는 데이터 필드를 선택
  });

  return { data, error, isPending, isLoading };
};
