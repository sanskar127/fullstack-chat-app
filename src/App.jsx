import { Home, Signin, Signup } from "./pages"
import { Toaster } from 'react-hot-toast'
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from 'react-router-dom'
import useSocketIO from "./hooks/useSocketIO"

const App = () => {
  const authUser = useSelector(state => state.auth.user)

  useSocketIO(authUser)

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/signin"} />} />
        <Route path="/signin" element={authUser ? <Navigate to={"/"} /> : <Signin />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
