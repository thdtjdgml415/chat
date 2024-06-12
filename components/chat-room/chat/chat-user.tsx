import { ChatMyConfig } from "./chat-my-config";
import { UserList } from "../room/chatroom-list";

export function ChatConfig() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="px-4 py-10">
        <UserList />
      </div>
      <div>
        <ChatMyConfig />
      </div>
    </div>
  );
}
