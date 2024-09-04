import { useEffect } from "react"
import toast from "react-hot-toast"
import { useGetUsersQuery } from "../api/chatApi"

const useGetConversations = () => {
    const { data: conversations = [], error, isLoading } = useGetUsersQuery()

    useEffect(() => {
        if (error) { toast.error(error.message) }
    }, [error])

    return { conversations, isLoading }
}

export default useGetConversations
