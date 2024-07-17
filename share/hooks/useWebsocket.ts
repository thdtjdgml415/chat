// import { Client } from "@stomp/stompjs";
// import { useCallback, useEffect, useRef } from "react";

// import { RoomDataProps } from "@/features/chat/components/create-room-modal";
// import useMessageStore from "../store/useMessageStore";

// export interface ChatDataProps {
//   type: string;
//   content: string;
//   sender: string;
//   roomId: string | null;
// }

// const useWebSocket = () => {
//   const { addMessage } = useMessageStore();

//   const accessToken = localStorage.getItem("access");

//   // const { setClient, clearClient } = useWebSocketStore();
//   const client = useRef<Client | undefined>();

//   useEffect(() => {
//     if (!accessToken) return;

//     const newClient = new Client({
//       brokerURL: `ws://43.203.222.95:8080/ws/chat`,
//       connectHeaders: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       onConnect: () => {
//         console.log("Connected to WebSocket server!", newClient);
//         // 초기 구독 설정 (예시)
//         if (newClient)
//           newClient.subscribe(`/sub/chat/public`, (message) => {
//             const messageData = JSON.parse(message.body);
//             console.log("Received public message:", messageData);
//           });
//       },
//       onDisconnect: () => {
//         console.log("STOMP: Disconnected");
//       },
//       onStompError: (frame) => {
//         console.error("Broker reported error: " + frame.headers["message"]);
//         console.error("Additional details: " + frame.body);
//       },
//       reconnectDelay: 5000,

//       // debug: (str) => {
//       //   console.log("STOMP Debug:", str);
//       // },
//     });

//     newClient.activate();
//     client.current = newClient;

//     return () => {
//       console.log("Disconnecting WebSocket...");
//       newClient.deactivate();
//     };
//   }, [accessToken]);

//   // // 메세지 전송 통록 구독
//   const subMessageSocket = (roomId: string) => {
//     // if (roomId === roomIdData) return; // 이미 구독 중인 방이면 중복 구독 방지
//     if (client.current?.connected) {
//       return client.current.subscribe(`/sub/chat/${roomId}`, (message) => {
//         const messageData = JSON.parse(message.body);
//         console.log("Received message for room chat:", messageData);
//         addMessage(messageData); // 배열로 묶어서 전달
//       });
//     } else {
//       console.log("소켓 연결이 되어 있지 않습니다.");
//     }
//   };

//   const subscribeToRoom = useCallback((roomId: string) => {
//     if (client && client.current?.connected) {
//       client.current.subscribe(`/sub/chat/${roomId}`, (message) => {
//         console.log("subscribeToRoom Received message:", message);
//         // 메시지 처리 로직
//       });
//     }
//   }, []);

//   const unsubscribeFromRoom = useCallback((roomId: string) => {
//     if (client && client.current?.connected) {
//       client.current.unsubscribe(`/sub/chat/${roomId}`);
//     }
//   }, []);

//   // 채팅방 생성
//   const createChatRoom = (roomData: RoomDataProps) => {
//     if (client && client.current?.connected) {
//       client.current.publish({
//         destination: "/pub/chat/createRoom/group",
//         body: JSON.stringify(roomData),
//       });
//     } else {
//       console.log("WebSocket client is not connected.");
//     }
//   };

//   // 메세지 전송
//   const sendChatMessage = (data: ChatDataProps) => {
//     if (client && client.current?.connected) {
//       client.current.publish({
//         destination: "/pub/chat/sendMessage",
//         body: JSON.stringify(data),
//       });
//     }
//   };

//   return {
//     createChatRoom,
//     sendChatMessage,
//     subMessageSocket,
//     subscribeToRoom,
//     unsubscribeFromRoom,
//   };
// };

// export default useWebSocket;
