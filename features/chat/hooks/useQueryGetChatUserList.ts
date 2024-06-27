import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ChatService from "../api/ChatService";
import { ChatUserListProps, User } from "../model/chat";

export const useQueryGetChatUserList = () => {
  const { data, error, isPending, isLoading } = useQuery<
    ChatUserListProps,
    AxiosError
  >({
    queryKey: ["room"],
    queryFn: () => ChatService.getChatUserList(),
  });

  return { data, error, isPending, isLoading };
};
