import { ChatRoom } from "@/widget/chat/chat-room";

import ChatRoomMenu from "@/widget/chat-config/chatroom-menu";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/share/ui/resizable";
import ChatUserList from "@/widget/chat-config/chatroom-user-menu";

export default function Page() {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-full  h-screen border-r-2 rounded-lg "
      >
        <ResizablePanel defaultSize={25} className="min-w-[201px] bg-secondary">
          {/* 설정 및 유저 상태 */}
          <div className="h-screen overflow-auto bg-secondary">
            <div className="px-4 mt-10">
              <ChatRoomMenu />
              <ChatUserList />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        {/* 채팅방 */}
        <ResizablePanel defaultSize={75} className="min-w-[500px]">
          <ChatRoom />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
