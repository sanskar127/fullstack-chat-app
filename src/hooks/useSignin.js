import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"
import { useSigninMutation } from "../api/authApi"

const useSignin = () => {
    const [signin, { isLoading }] = useSigninMutation()
    const dispatch = useDispatch()

    const handler = async (inputs) => {
        if (!handleInputError(inputs)) { return }

        try {
            const response = await signin(inputs).unwrap(); // Use unwrap() to get the resolved value directly

            if (response) {
                dispatch(setUser(response))
                localStorage.setItem("user", JSON.stringify(response))
                const userName = inputs.uname
                toast.success(`${userName} signed in Successfully`)
            }
        } catch (e) {
            toast.error(e.message || "Sign in failed!")
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

export default useSignin
