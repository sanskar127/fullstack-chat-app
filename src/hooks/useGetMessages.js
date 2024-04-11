import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from '../slices/Conversation/conversationsSlice'
import toast from 'react-hot-toast'
import axios from 'axios'

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)

    // messages setmessages selectedconversations
    const dispatch = useDispatch()
    const messages = useSelector(state => state.conversation.messages)
    const selectedConversation = useSelector(state => state.conversation.selectedConversation)

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
    
            try {
                await axios.get(`/api/message/${selectedConversation._id}`)
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
        if (selectedConversation?._id) { getMessages() }
    }, [selectedConversation?._id, dispatch])

    return { loading, messages }
}

export default useGetMessages