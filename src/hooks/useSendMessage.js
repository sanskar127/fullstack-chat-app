import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from '../slices/Conversation/conversationsSlice'

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)

    // messages setMessages selected Conversations
    const dispatch = useDispatch()
    const selectedConversation = useSelector(state => state.conversation.selectedConversation)

    const sendMessage = async (message) => {
        setLoading(true)

        try {
            await axios.post(`/api/message/send/${selectedConversation._id}`, message)
                .then(res => {
                    const data = res.data

                    if (data.error) { throw new Error(data.error) }
                    dispatch(setMessages(data))
                })
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage
