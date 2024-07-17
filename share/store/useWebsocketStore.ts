import { RoomDataProps } from "@/features/chat/components/create-room-modal";
import { Client, Message } from "@stomp/stompjs";
import { create } from "zustand";

interface useWebsocketStoreProps {
  client: Client | null;
  messages: Message[];

  connect: () => void;
  disconnect: () => void;
  subscribePublic: () => void;
  subscribeToRoom: (roomId: string) => void;
  unsubscribeFromRoom: (roomId: string) => void;
  sendMessage: (roomId: string, data: string) => void;
  createChatRoom: (data: RoomDataProps) => void;
  // 기타 필요한 메서드 또는 속성 추가
}

// WebSocket 스토어 정의
export const useWebSocketStore = create<useWebsocketStoreProps>((set, get) => ({
  client: null as Client | null,
  messages: [],
  connect: () => {
    const client = new Client({
      brokerURL: `ws://43.203.222.95:8080/ws/chat`,
      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      onConnect: () => {
        console.log("Connected to WebSocket server!");
        set({ client });
        get().subscribePublic(); // 예시 구독
        console.log("Connected to WebSocket server!!!!!!!");
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket server!");
        set({ client: null });
      },

      //   debug: (str) => {
      //     console.log("STOMP Debug:", str);
      //   },
      onStompError: (frame) => {
        console.error("Broker reported error:", frame.headers["message"]);
        console.error("Additional details:", frame.body);
      },
      reconnectDelay: 5000,
    });
    client.activate();
  },
  disconnect: () => {
    get().client?.deactivate();
  },
  // 일반 통로 구독
  subscribePublic: () => {
    const { client } = get();
    if (client) {
      client.subscribe(`/sub/chat/public`, (message: any) => {
        const messageData = JSON.parse(message.body);
        console.log("Received public message:", messageData);
      });
    }
  },
  // 채팅방 구독
  subscribeToRoom: (roomId: string) => {
    const { client } = get();
    if (client?.connected) {
      client.subscribe(`/sub/chat/${roomId}`, (message: any) => {
        const messageData = JSON.parse(message.body);
        console.log("Received message for room chat:", messageData);
        set((state: { messages: any }) => ({
          messages: [...state.messages, messageData],
        }));
      });
    }
  },
  // 채팅방 구독 해지
  unsubscribeFromRoom: (roomId: string) => {
    const { client } = get();
    if (client && client.connected) {
      client.unsubscribe(`/sub/chat/${roomId}`);
    }
  },
  // 메세지 전송
  sendMessage: (data) => {
    console.log(data);
    const { client } = get();
    if (client?.connected) {
      client.publish({
        destination: `/pub/chat/sendMessage`,
        body: JSON.stringify(data),
      });
    }
  },

  //   // 채팅방 생성
  createChatRoom: (roomData: RoomDataProps) => {
    const { client } = get();
    if (client && client.connected) {
      client.publish({
        destination: "/pub/chat/createRoom/group",
        body: JSON.stringify(roomData),
      });
    } else {
      console.log("WebSocket client is not connected.");
    }
  },
}));
