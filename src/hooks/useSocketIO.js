import { useEffect } from "react"
import { setOnlineUsers, setSocket } from "../features/Socket/socketSlice"
import { io } from "socket.io-client"
import { useDispatch, useSelector } from "react-redux"

const useSocketIO = authUser => {
    const dispatch = useDispatch()
    const socket = useSelector(state => state.socket.socket)

    useEffect(() => {
        if (authUser) {
            // Initialize socket connection
            const mySocket = io("http://localhost:3000", {
                query: {
                    userId: authUser._id,
                },
            })

            // Dispatch socket instance to Redux store
            dispatch(setSocket(mySocket))

            // Listen for 'getUsersOnline' event
            mySocket.on("getOnlineUsers", users => dispatch(setOnlineUsers(users)))

            // Cleanup on component unmount or authUser change
            return () => {
                if (mySocket) {
                    mySocket.off("getUsersOnline") // Remove listeners
                    mySocket.close() // Close connection
                    dispatch(setSocket(null)) // Optionally clear socket from Redux store
                }
            }
        } else {
            // Handle case where authUser is null
            if (socket) {
                socket.close()
                dispatch(setSocket(null))
            }
        }

    }, [authUser, dispatch])

}

export default useSocketIO
