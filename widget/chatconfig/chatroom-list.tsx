"use client";
import ToggleListBtn from "@/share/atom-components/toggle-list-button";
import useToggle from "@/hooks/useToggle";
import { ChatRoomItem } from "./chatroom-item";

const roomData = [
  {
    id: 1,
    title: "dsadsada",
    domain: "dsdada",
    lastMessage: "ddsadadad",
    date: "00월 00일",
  },
  {
    id: 2,
    title: "dsadsada",
    domain: "dsdada",
    lastMessage: "ddsadadad",
    date: "00월 00일",
  },
  {
    id: 3,
    title: "dsadsada",
    domain: "dsdada",
    lastMessage: "ddsadadad",
    date: "00월 00일",
  },
];

export const ChatRoomList: React.FC = () => {
  const [isToggle, setIsToggle] = useToggle();
  return (
    <>
      <ToggleListBtn
        toggleFn={setIsToggle}
        state={isToggle}
        label={"채팅방 목록"}
      />
      {isToggle &&
        roomData?.map((room) => {
          return (
            <ChatRoomItem
              key={room.id}
              id={room.id}
              domain={room.domain}
              lastMessage={room.lastMessage}
              date={room.date}
              title={room.title}
            />
          );
        })}
    </>
  );
};
