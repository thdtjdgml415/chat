"use client";

// import { ChatMessage } from "@/components/atom/Chatroom/ChatMessage";
// import { ChatInput } from "@/components/molecule/Chatroom/ChatInput";
// import { PreviewImage } from "@/components/molecule/Chatroom/PreviewImage";
// import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import { ChatInput } from "./chat-input";
import { PreviewImage } from "./prev-image";
import { ChatMessage } from "./chat-boloon";
// import { useSelector } from "react-redux";

export function ChatRoom() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  //   const messages = useSelector(
  //     (state: RootState) => state.chatReducer.messages
  //   );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);

  return (
    <div className="w-full h-screen bg-ST_primary px-5 py-9">
      <div className="w-full h-[96%]  flex flex-col justify-end ">
        <div className="flex flex-col overflow-y-auto">
          <ChatMessage />
          <div ref={messagesEndRef} />
        </div>

        <PreviewImage />
      </div>

      <div className="w-full">
        <ChatInput />
      </div>
    </div>
  );
}
