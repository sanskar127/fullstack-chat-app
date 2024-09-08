import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../features/Conversation/conversationsSlice"

const useListenMessages = () => {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.socket.socket)
  const messages = useSelector(state => state.conversation.messages)

  useEffect(() => {
    socket?.on("newMessage", newMessage => {
        dispatch(setMessages([...messages, newMessage]))
    })

    return () => socket?.off("newMessage")
  }, [socket, dispatch, messages])
}

export default useListenMessages
