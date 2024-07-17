import { create } from "zustand";

export interface MessageDataProps {
  id: number;
  content: string;
  sender: string;
  roomId: string;
  type: string;
  createdDate: string;
}

interface MessageStore {
  messages: MessageDataProps[];
  addMessage: (message: MessageDataProps) => void;
  setMessages: (messages: MessageDataProps[]) => void;
  clearMessages: () => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  setMessages: (messages) => set({ messages }),
  clearMessages: () => set({ messages: [] }),
}));
export default useMessageStore;
