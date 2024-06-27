"use client";

import useToggle from "@/hooks/useToggle";
import ToggleListBtn from "@/share/atom-components/toggle-list-button";
import { ChatRoomList } from "../../features/chat/components/chatroom-list";

export default function ChatRoomMenu() {
  const [isToggle, setIsToggle] = useToggle();
  return (
    <>
      <ToggleListBtn
        toggleFn={setIsToggle}
        state={isToggle}
        label={"채팅방 목록"}
      />

      {isToggle && <ChatRoomList />}
    </>
  );
}
