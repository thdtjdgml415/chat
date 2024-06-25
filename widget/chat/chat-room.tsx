"use client";

import { useRef } from "react";
import useChatMessage from "../../features/chat/hooks/useChatMessage";
import useScrollBottom from "../../features/chat/hooks/useScrollBottom";
import { ChatMessage } from "../../features/chat/components/chat-boloon";
import { ChatInput } from "../../features/chat/components/chat-input";
import { PreviewImage } from "../../features/chat/components/prev-image";

export function ChatRoom() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages } = useChatMessage();
  useScrollBottom({ messagesEndRef, messages });

  return (
    <div className="w-full h-screen bg-ST_primary px-5 py-9">
      <div className="w-full h-[96%]  flex flex-col justify-end ">
        <div className="flex flex-col overflow-y-auto">
          <ChatMessage messages={messages} />
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
