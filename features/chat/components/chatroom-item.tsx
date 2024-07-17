import { Room } from "@/features/chat/model/chat";
import useChatroomStateStore from "@/share/store/useChatroomStateStore";
import React from "react";

const ChatRoomItem = React.memo(
  ({
    roomId,
    title,
    roomType,
    loginId,
    lastMessage,
    unreadMsgNumber,
    // subMessageSocket,
    currentRoomId,
    setRoomId,
  }: Room) => {
    const { setOpenChat } = useChatroomStateStore();
    const handleOpenChat = () => {
      setRoomId(roomId);
      setOpenChat(true);
    };

    return (
      <li
        key={roomId}
        data-name={roomId}
        className={`my-2 px-2 rounded-md list-none ${
          currentRoomId === roomId ? "bg-zinc-500" : "hover:bg-black/10"
        }`}
        onClick={handleOpenChat}
      >
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <p className="text-xs">{loginId}</p>
        </div>
        <p className="sr-only">{roomId}</p>
        <p className="text-xs text-[#838383]">{unreadMsgNumber}</p>
      </li>
    );
  }
);

export default ChatRoomItem;
