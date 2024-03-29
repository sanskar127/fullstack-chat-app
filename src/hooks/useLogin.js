import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (inputs) => {
        const success = handleInputError(inputs)
        if (!success) { return }

        setLoading(true)

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signin", inputs)
            const data = await res.data

            if (data.error) {
                throw new Error(data.error)
            }

            // localstorage
            localStorage.setItem("chat-app-user", JSON.stringify(data))

            // context
            setAuthUser(data)

            toast.success("Log in Successfully")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(true)
        }
    }

    return { login, loading }
}

const handleInputError = ({ uname, passwd }) => {
    if (!uname || !passwd) {
        toast.error("Complete All Input Fields")
        return false
    }

    return true
}

export default useLogin
