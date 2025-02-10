import { Mii } from "@/r3f/mii/MiiRendered";
import { socket } from "@/socket/socket";
import { create } from "zustand"


interface SocketStore {
    users:SocketUser[],
    emitSpawned:(user:SocketUser)=>void;
    emitMove:(newPos:[number, number, number]) => void,
    emitRotate:(newRot:[number, number, number]) => void,
    emitAnimation:(animation:string) => void,
    emitMessage:(msg:string) => void,
    updateUsers:(users:SocketUser[])=>void
}

export interface SocketUser {
    name:string,
    id:string|undefined,
    position:[number, number, number],
    pointToLookAt:[number, number, number],
    mii:Mii,
    currentAnimation:string, 
    msg:string
}


export const useSocketStore = create<SocketStore>((set) => ({
    users:[],
    emitSpawned:(user:SocketUser) => {
        socket?.emit('spawn',user)
    },
    emitMove: (newPosition:[number, number, number]) => {
        socket?.emit('move',newPosition)
    },
    emitRotate:(pointToLookAt:[number, number, number])=> {
        socket?.emit('rotate',pointToLookAt)
    },
    emitAnimation:(newAnimation:string) => {
        socket?.emit('animate',newAnimation)
    },
    emitMessage:(msg:string) => {
        socket?.emit('message',msg)
    },
    updateUsers:(users:SocketUser[]) => {
        set({users:users});
    }
}))