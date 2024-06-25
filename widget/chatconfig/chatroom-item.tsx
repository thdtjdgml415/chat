import { Room } from "@/features/chat/model/room";

export const ChatRoomItem: React.FC<Room> = ({
  id,
  title,
  domain,
  lastMessage,
  date,
}) => {
  return (
    <>
      <div className="my-2 px-4">
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <p className="text-xs">{date}</p>
        </div>
        <p className="sr-only">{domain}</p>
        <p className="text-xs text-[#838383]">{lastMessage}</p>
        <hr className="my-2 px-1" />
      </div>
    </>
  );
};