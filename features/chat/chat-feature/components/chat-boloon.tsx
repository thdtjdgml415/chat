import { formatDate } from "@/lib/utils";
import { Message } from "../hooks/useChatMessage";

export const ChatMessage = ({ messages }: { messages: Message[] }) => {
  return (
    <>
      {messages?.map((item: Message) => {
        return (
          <div className="p-3 hover:bg-ST_grayHover1">
            <div className="flex items-center mb-1">
              <p className="text-fontSize-title16 font-bold text-ST_asist mr-6">
                송
              </p>
              <div className="text-sm text-ST_placeHolder">
                {formatDate(item.timestamp)}
              </div>
            </div>
            <div className="text-title16 font-medium text-ST_asist">
              {item.text}
            </div>
          </div>
        );
      })}
    </>
  );
};
