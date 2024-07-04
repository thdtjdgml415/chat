import { useCallback, useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { RoomDataProps } from "@/features/chat/components/create-room-modal";
import { v4 as uuidv4 } from "uuid";
import useWebSocketStore from "../store/useClientStore";

const useWebSocket = () => {
  const accessToken = localStorage.getItem("access");
  const { setClient, clearClient } = useWebSocketStore();
  useEffect(() => {
    if (!accessToken) return;

    const newClient = new Client({
      brokerURL: `ws://43.203.222.95:8080/ws/chat`,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug: (str) => {
        console.log("debug message---", str);
      },
      onStompError: function (frame) {
        // Will be invoked in case of error encountered at Broker
        // Bad login/passcode typically will cause an error
        // Complaint brokers will set `message` header with a brief message. Body may contain details.
        // Compliant brokers will terminate the connection after any error
        console.log("Broker reported error: " + frame.headers["message"]);
        console.log("Additional details: " + frame.body);
      },
    });

    newClient.activate();
    setClient(newClient);

    return () => {
      console.log("disconnection --------------- websocket");
      newClient.deactivate();
      clearClient();
    };
  }, [accessToken, setClient, clearClient]);

  // const createChatRoom = useCallback(
  //   (roomData: RoomDataProps) => {
  //     if (client && client.connected) {
  //       console.log("Sending room creation data:", roomData);
  //       const result = { ...roomData, roomId: roomUuid };
  //       console.log(result);
  //       client.publish({
  //         destination: "/pub/chat/createRoom/group",
  //         body: JSON.stringify(result),
  //       });
  //       console.log(client);
  //     } else {
  //       console.log("WebSocket client is not connected.");
  //     }
  //   },
  //   [client]
  // );
  return {};
  // return { client };
};

export default useWebSocket;
