// import { useEffect } from "react";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
// import useChatMessage from "./useChatMessage";

// export const useStompClient = () => {
//   useEffect(() => {
//     const sock = new SockJS("");
//     const stompClient = Stomp.over(sock);

//     stompClient.connect({}, (frame) => {
//       console.log(frame + "connected");

//       stompClient.subscribe("", (messages) => {
//         const msgBody = JSON.parse(messages.body);
//         useChatMessage.getState().addMessage(msgBody);
//       });
//     });

//     return () => {
//       stompClient.disconnect(() => {
//         return console.log("Disconnetion");
//       });
//     };
//   }, []);
// };
