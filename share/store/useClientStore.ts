import { Client } from "@stomp/stompjs";
import { create } from "zustand";

interface ClientStore {
  client: Client | null;
  setClient: (client: Client) => void;
  clearClient: () => void;
}

const useWebSocketStore = create<ClientStore>((set) => ({
  client: null,

  setClient: (client) => set({ client }),
  clearClient: () => set({ client: null }),
}));

export default useWebSocketStore;
