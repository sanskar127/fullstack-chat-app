import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const login = async (inputs) => {
        const success = handleInputError(inputs)
        if (!success) { return }

        setLoading(true)

        try {
            await axios.post("/api/auth/signin", inputs)
                .then(res => {
                    const data = res.data

                    if (data.error) {
                        throw new Error(data.error)
                    }

                    // reducer
                    // dispatch(setUser(data))
                    dispatch(setUser(data))
                })

            toast.success("Log in Successfully")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
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
