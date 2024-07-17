"use client";

import useChatroomStateStore from "@/share/store/useChatroomStateStore";
import ChattingBox from "./chatting-box";

export function ChatRoom() {
  const { isOpen, setOpenChat } = useChatroomStateStore();

  return (
    <div className="relative">
      {isOpen && (
        <>
          <button
            className="absolute right-5 bg-[#cccc]"
            onClick={() => {
              setOpenChat(false);
            }}
          >
            Close
          </button>
          <ChattingBox />
        </>
      )}
    </div>
  );
}
