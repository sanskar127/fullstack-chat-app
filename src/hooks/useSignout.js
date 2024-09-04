import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../slices/Auth/authSlice"
import { useSignoutMutation } from "../api/authApi"

const useLogout = () => {
    const [signout, { isLoading }] = useSignoutMutation()
    const dispatch = useDispatch()

    const handler = async () => {

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

    return { handler, isLoading }
}

export default useLogout
