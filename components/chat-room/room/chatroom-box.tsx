"use client";

import ToggleListBtn from "@/share/atom-components/toggle-list-button";
import useToggle from "@/hooks/useToggle";

export default function ChatRoomBox() {
  const [toggleFn, setIsToggle] = useToggle();
  return (
    <div>
      <ToggleListBtn
        toggleFn={setIsToggle}
        state={toggleFn}
        label="채팅방 리스트"
      />
    </div>
  );
}
