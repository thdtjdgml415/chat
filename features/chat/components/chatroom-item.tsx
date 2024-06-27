import { Room } from "@/features/chat/model/chat";

export const ChatRoomItem: React.FC<Room> = ({
  roomId,
  title,
  roomType,
  loginId,
  lastMessage,
  unreadMsgNumber,
}) => {
  return (
    <>
      <div className="my-2 px-2 rounded-md  hover:bg-black/10 ">
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <p className="text-xs">{loginId}</p>
        </div>
        <p className="sr-only">{roomId}</p>
        <p className="text-xs  text-[#838383]">{lastMessage}</p>
      </div>
    </>
  );
};
