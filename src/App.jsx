import { Home, Login, Signup } from "./pages"
import { Toaster } from 'react-hot-toast'
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from 'react-router-dom'
import Test from "./components/Test"

const App = () => {
  const authUser = useSelector(state => state.auth.user)
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
        <Route path="/test" element={<Test/> } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
