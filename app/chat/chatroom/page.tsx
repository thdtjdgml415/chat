import { ChatRoom } from "@/components/chat-room/chat/chat-room";
import { ChatConfig } from "@/components/chat-room/chat/chat-user";

export default function Page() {
  return (
    <>
      <div className="min-w-[201px] w-72 h-screen  bg-ST_grayHover2 text-ST_asist">
        {/* 설정 및 유저 상태 */}
        <ChatConfig />
      </div>
      {/* 채팅방 */}
      <ChatRoom />
    </>
  );
}
