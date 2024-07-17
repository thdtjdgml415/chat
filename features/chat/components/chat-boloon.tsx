"use client";
import { formatDateKor } from "@/share/lib/utils";

import { useEffect } from "react";

import { MessageDataProps } from "@/share/store/useMessageStore";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import ChatService from "../api/ChatService";

const ChatMessage = ({
  messages,
  addMessage,
  roomId,
  subscribeToRoom,
  unsubscribeFromRoom,
}: any) => {
  const { data: chatHistory, isLoading: chatHistoryLoading } = useQuery({
    queryKey: ["chatHistory", roomId],
    queryFn: () => ChatService.getChatHistroy(roomId),
    select: (data: any) => data.data,
    enabled: !!roomId,
  });

  useEffect(() => {
    if (roomId) {
      console.log("채팅 입장 " + roomId);
      subscribeToRoom(roomId);
      return () => {
        console.log("채팅나감" + roomId);
        unsubscribeFromRoom(roomId);
      };
    }
  }, [chatHistory]);

  useEffect(() => {
    if (chatHistory) {
      chatHistory?.forEach((e: any) => {
        addMessage(e);
      });
    }
  }, [chatHistory, roomId]);

  if (chatHistoryLoading) return <div>로딩중</div>;
  if (!chatHistory) return <div>메세지가 존재하지 않습니다.</div>;

  return (
    <>
      {messages?.map((item: MessageDataProps) => {
        return (
          <div key={uuidv4()} className="p-3 hover:bg-secondary">
            {item.type === "JOIN" ? (
              `${item.sender} 님께서 입장하셨습니다.`
            ) : item.type === "INACTIVE" ? (
              `${item.sender}님께서 퇴장하셨습니다.`
            ) : (
              <>
                <div className="flex items-center mb-1">
                  <p className="text-fontSize-title16 font-bold text-ST_asist mr-6">
                    {item.sender}
                  </p>
                  <div className="text-sm text-ST_placeHolder">
                    {formatDateKor(item.createdDate)}
                  </div>
                </div>
                <div className="text-title16 font-medium text-ST_asist">
                  {item.content}
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
export default ChatMessage;
