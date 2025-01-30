import { Socket } from "socket.io-client"
import { create } from "zustand"


interface SocketStore {
    socket: Socket|undefined,
    initSocket:(socket:Socket)=>void;
}


export const useSocketStore = create<SocketStore>((set) => ({
    socket:undefined,
    initSocket:(initSocket:Socket) => {
        set({socket:initSocket})
    }
}))