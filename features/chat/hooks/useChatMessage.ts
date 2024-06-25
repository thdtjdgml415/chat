import { create } from "zustand";

// Define the message type
export type Message = {
  text: string;
  timestamp: string;
};

// Define the store type
type Store = {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
};

const useChatMessage = create<Store>((set) => ({
  messages: [],

  addMessage: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage],
    })),
}));

export default useChatMessage;
