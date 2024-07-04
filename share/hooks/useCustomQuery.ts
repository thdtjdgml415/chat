import { useQuery } from "@tanstack/react-query";

function useCustomQuery<T>(
  queryKey: string[],
  queryFunction: () => Promise<T>,
  selectFunction = (data: any) => data
) {
  const { data, error, isPending, isLoading } = useQuery({
    queryKey,
    queryFn: queryFunction,
    select: selectFunction,
  });

  return { data, error, isPending, isLoading };
}

export default useCustomQuery;
