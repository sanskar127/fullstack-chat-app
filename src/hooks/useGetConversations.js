import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)

            try {
                await axios.get("/api/users")
                .then(res => {
                    const data = res.data
    
                    if (data.error) {
                        throw new Error(data.error)
                    }
    
                    setConversations(data)
                })
                
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        getConversations()
    }, [])

    return { conversations, loading }
}

export default useGetConversations
