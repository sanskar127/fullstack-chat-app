import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../features/Auth/authSlice"
import { useSigninMutation, useSignoutMutation, useSignupMutation } from "../api/authApi"

const useAuth = () => {
    const [signin, { isLoading: signinLoading }] = useSigninMutation();
    const [signup, { isLoading: signupLoading }] = useSignupMutation();
    const [signout, { isLoading: signoutLoading }] = useSignoutMutation();
    const dispatch = useDispatch()

    const SignInHandler = async (inputs) => {
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

    const SignUpHandler = async (inputs) => {
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

    const SignOutHandler = async () => {

        try {
            const response = await signout().unwrap()

            if (response) {
                dispatch(setUser(null))
                // localstorage
                localStorage.removeItem("user")
                toast.success("Signout Successfully")
            }

            // if (isError) { throw new Error(error) }

        } catch (e) {
            toast.error("Sign in failed!")
        }
    }

    return { SignInHandler, SignUpHandler, SignOutHandler, signinLoading, signupLoading, signoutLoading }
}

const handleInputError = ({ uname, passwd }) => {
    if (!uname || !passwd) {
        toast.error("Complete All Input Fields")
        return false
    }

    return true
}

export default useAuth
