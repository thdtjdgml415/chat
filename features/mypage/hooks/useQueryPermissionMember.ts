import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ConfigService from "../api/ConfigService";
import { ApiResponse, PermissionProps } from "../model/myConfig";

export const useQueryPermissionMember = <T>() => {
  const { data, error, isPending, isLoading } = useQuery<ApiResponse>({
    queryKey: ["permissionList"],
    queryFn: () => ConfigService.getPermissionListData(),
    select: (response: ApiResponse): ApiResponse => response, // 여기에서 원하는 데이터 필드를 선택
  });

  return { data, error, isPending, isLoading };
};
