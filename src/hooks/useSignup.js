import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"

const useSignup = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const signup = async (inputs) => {
        const success = handleInputError(inputs)
        if (!success) { return }

        setLoading(true)

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", inputs)
            const data = await res.data

            if (data.error) {
                throw new Error(data.error)
            }

            // localstorage
            localStorage.setItem("chat-app-user", JSON.stringify(data))

            // reducer
            dispatch(setUser(data))

            toast.success("Account Created Successfully")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(true)
        }
    }

    return { signup, loading }
}

const handleInputError = ({ fullname, uname, passwd, cpasswd, gender }) => {
    if (!fullname || !uname || !passwd || !cpasswd || !gender) {
        toast.error("Complete All Input Fields")
        return false
    }

    if (passwd !== cpasswd) {
        toast.error("Passwords do not match")
        return false
    }

    return true
}

export default useSignup
