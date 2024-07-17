import { ChatInput, ChatMessage } from "@/features/chat";
import useScrollBottom from "@/features/chat/hooks/useScrollBottom";
// import useWebSocket from "@/share/hooks/useWebsocket";
import useMessageStore from "@/share/store/useMessageStore";
import useRoomIdStore from "@/share/store/useRoomIdStore";
import { useWebSocketStore } from "@/share/store/useWebsocketStore";
import { useEffect, useRef } from "react";

export default function ChattingBox() {
  const { roomId } = useRoomIdStore();
  const { messages, clearMessages, addMessage } = useMessageStore();

  const { subscribeToRoom, unsubscribeFromRoom, sendMessage } =
    useWebSocketStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useScrollBottom({ messagesEndRef, messages });

  useEffect(() => {
    subscribeToRoom(roomId);
    // console.log(roomId, " 채팅방 구독");

    return () => {
      clearMessages();
      unsubscribeFromRoom(roomId);
      // console.log(roomId, " 채팅방 해지");
    };
  }, [roomId, subscribeToRoom, unsubscribeFromRoom, clearMessages]);

  return (
    <div className="w-full h-screen bg-ST_primary px-5 py-5 box-border">
      <div className="w-full h-[96%] flex flex-col justify-end border-2">
        <div className="flex flex-col overflow-y-auto">
          <ChatMessage
            messages={messages}
            addMessage={addMessage}
            roomId={roomId}
            subscribeToRoom={subscribeToRoom}
            unsubscribeFromRoom={unsubscribeFromRoom}
          />
          <div ref={messagesEndRef} />
        </div>
        {/* <PreviewImage /> */}
      </div>
      <div className="w-full">
        <ChatInput
          roomId={roomId}
          sendChatMessage={sendMessage}
          subscribeToRoom={subscribeToRoom}
          unsubscribeFromRoom={unsubscribeFromRoom}
        />
      </div>
    </div>
  );
}
