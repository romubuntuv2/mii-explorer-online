import { useSocketStore } from '@/stores/SocketStore'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

const useSocket = () => {


    const {initSocket, socket} = useSocketStore();

    useEffect(()=> {
      if(socket) return 
      const socketConnect = io("http://localhost:3001", {
        withCredentials: true,
    });
        initSocket(socketConnect);
    },[])


  return {socket}
}

export default useSocket