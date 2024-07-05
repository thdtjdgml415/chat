import ChatRoomMenu from "./chatroom-menu";
import ChatUserList from "./chatroom-user-menu";

export default function ConfigChatRoomSide() {
  return (
    <div className="h-screen overflow-auto bg-secondary">
      <div className="px-4 mt-10">
        <ChatRoomMenu />
        <ChatUserList />
      </div>
    </div>
  );
}
