import { Mii } from "@/r3f/mii/MiiRendered";
import { socket } from "@/socket/socket";
import { Socket } from "socket.io-client"
import { create } from "zustand"


interface SocketStore {
    users:SocketUser[],
    emitSpawned:(user:SocketUser)=>void;
    emitMove:(newPos:[number, number, number]) => void,
    updateUsers:(users:SocketUser[])=>void
}

export interface SocketUser {
    name:string,
    id:string|undefined,
    position:[number, number, number],
    mii:Mii
}


export const useSocketStore = create<SocketStore>((set,get) => ({
    users:[],
    emitSpawned:(user:SocketUser) => {
        socket?.emit('spawn',user)
    },
    emitMove: (newPosition:[number, number, number]) => {
        console.log("io");
        socket?.emit('move',newPosition)
    },
    updateUsers:(users:SocketUser[]) => {
        set({users:users});
    }
}))