import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setLoading(true)

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signout")
            const data = await res.data

            if (data.error) {
                throw new Error(data.error)
            }

            // localstorage
            localStorage.removeItem("chat-app-user")

            // context
            setAuthUser(null)

            toast.success("Logout Successfully")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { logout, loading }
}

export default useLogout
