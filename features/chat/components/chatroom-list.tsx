"use client";
import { useQueryGetChatRoomList } from "@/features/chat/hooks/useQueryGetChatRoomList";
import { Room } from "@/features/chat/model/chat";
import { Skeleton } from "@/share/ui/skeleton";
import { ChatRoomItem } from "./chatroom-item";

export const ChatRoomList = () => {
  const { data: roomData, error, isLoading } = useQueryGetChatRoomList();

  if (isLoading)
    return (
      <div className="flex flex-col space-y-3 my-5">
        <Skeleton className="h-[50px] w-full rounded-xl" />
        <Skeleton className="h-[50px] w-full rounded-xl" />
        <Skeleton className="h-[50px] w-full rounded-xl" />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;
  if (!roomData || roomData.data.length === 0)
    return <div className="my-10">채팅방 목록이 없습니다.</div>;

  return (
    <>
      {roomData.data.map((room: Room) => {
        const {
          roomId,
          title,
          roomType,
          loginId,
          lastMessage,
          unreadMsgNumber,
        } = room;
        return (
          <ChatRoomItem
            key={roomId}
            roomId={roomId}
            title={title}
            roomType={roomType}
            loginId={loginId}
            lastMessage={lastMessage}
            unreadMsgNumber={unreadMsgNumber}
          />
        );
      })}
    </>
  );
};
