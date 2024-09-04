import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"
import { useSigninMutation } from "../api/authApi"

const useLogin = () => {
    const [signin, { data, isSuccess, isError, isLoading, error }] = useSigninMutation()
    const dispatch = useDispatch()

    const handler = async (inputs) => {
        if (!handleInputError(inputs)) { return }

        try {
            await signin(inputs)

            if (isSuccess) {
                dispatch(setUser(data))
                // localstorage
                localStorage.setItem("user", JSON.stringify(data))
                const userName = inputs.uname
                toast.success(`${userName} signed in Successfully`)
            }

            if (isError) { throw new Error(error) }

        } catch (e) {
            toast.error("Sign in failed!")
        }
    }

    return { handler, isLoading }
}

const handleInputError = ({ uname, passwd }) => {
    if (!uname || !passwd) {
        toast.error("Complete All Input Fields")
        return false
    }

    return true
}

export default useLogin
