import { useEffect } from "react";
import { Message } from "./useChatMessage";

const useScrollBottom = ({
  messagesEndRef,
  messages,
}: {
  messagesEndRef: any;
  messages: Message[];
}) => {
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
};
export default useScrollBottom;
