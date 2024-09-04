import toast from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from '../slices/Conversation/conversationsSlice'
import { useSendMessageMutation } from '../api/chatApi'

const useSendMessage = () => {
    const [sendMessage, { isLoading, isError, error }] = useSendMessageMutation()

    // messages setMessages selected Conversations
    const dispatch = useDispatch()
    const selectedConversation = useSelector(state => state.conversation.selectedConversation)

    const handler = async (message) => {

        try {
            const response = await sendMessage({ conversationId: selectedConversation._id, message }).unwrap()

            if (response) { dispatch(setMessages(response)) }
            if (isError) { throw new Error(error) }

        } catch (e) {
            toast.error(e.message)
        }
    }

    return { handler, isLoading }
}

export default useSendMessage
