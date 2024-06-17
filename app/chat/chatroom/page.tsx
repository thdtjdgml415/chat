import { ChatRoom } from "@/components/chat-room/chat/chat-room";
import { ChatRoomList } from "@/features/chatRoom-feature/components/chatroom-list";

import UserList from "@/features/user-feature/components/user-list";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

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
              <ChatRoomList />
              <UserList />
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
