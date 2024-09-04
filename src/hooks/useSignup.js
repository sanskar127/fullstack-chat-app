import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"
import { useSignupMutation } from "../api/authApi"

const useSignup = () => {
    const [signup, { isLoading, }] = useSignupMutation()
    const dispatch = useDispatch()

    const handler = async (inputs) => {
        if (!handleInputError(inputs)) { return }

        try {
            const response = await signup(inputs).unwrap()

            if (response) {
                dispatch(setUser(response))
                // localstorage
                localStorage.setItem("user", JSON.stringify(response))
                toast.success("Account Created Successfully")
            }

            // if (isError) { throw new Error(error) }

        } catch (e) {
            toast.error("Sign in failed!")
        }
    }

    return { handler, isLoading }
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
