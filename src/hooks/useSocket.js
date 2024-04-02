import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import io from "socket.io-client"
// socket setSocket onlineUsers setOnlineUsers

const useSocket = () => {
    const authUser = useSelector(state => state.auth.user)
    const [socket, setSocket] = useState("")
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000")
            
            setSocket(socket)
            
            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [])
    
}

export default useSocket