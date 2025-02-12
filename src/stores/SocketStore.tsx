import { Mii } from "@/r3f/mii/MiiRendered";
import { socket } from "@/socket/socket";
import { Socket } from "socket.io-client";
import { create } from "zustand"


interface SocketStore {
    mySocket:Socket,
    localMii:Mii|null,
    isLocalOnly:boolean,
    setIsLocalOnly:(value:boolean)=>void,
    setLocalMii:(mii:Mii)=>void,
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
    mySocket:socket,
    localMii:null,
    isLocalOnly:true,
    setIsLocalOnly:(value:boolean)=>{
        set({isLocalOnly:value})
    },
    setLocalMii:(mii:Mii)=>{
        set({localMii:mii})
    },
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