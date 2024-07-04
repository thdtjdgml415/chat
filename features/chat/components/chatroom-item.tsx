"use client";
import { Room } from "@/features/chat/model/chat";
import { Button } from "@/share/ui/button";

export const ChatRoomItem: React.FC<Room> = ({
  roomId,
  title,
  roomType,
  loginId,
  lastMessage,
  unreadMsgNumber,
}) => {
  const handleOpenChat = (e) => {
    console.log(e.target.dataset.name);
  };
  return (
    <>
      <li
        key={roomId}
        data-name={`${roomId}`}
        className="my-2 px-2 rounded-md  hover:bg-black/10 "
        onClick={handleOpenChat}
      >
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <p className="text-xs">{loginId}</p>
        </div>
        <p className="sr-only">{roomId}</p>
        <p className="text-xs  text-[#838383]">{unreadMsgNumber}</p>
      </li>
    </>
  );
};
