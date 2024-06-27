import Service from "@/share/api/Service";
import { ChatRoomProps, ChatUserListProps, Room, User } from "../model/chat";
import axios from "axios";

// process.env.NEXT_PUBLIC_API_BASE_URL + "/api/chat/rooms",
// {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Credenials": true,
//     "ngrok-skip-browser-warning": true,
//     Bearer: token,
//   },
// }

class ChatService extends Service {
  async getChatRoomList(): Promise<ChatRoomProps> {
    const response = await this.get<ChatRoomProps>("/api/chat/rooms");
    return response;
  }

  async getChatUserList() {
    const response = await this.get<ChatUserListProps>("/api/member/colleague");
    return response;
  }
}

export default new ChatService();
