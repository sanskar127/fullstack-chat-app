// import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { Home, Login, Signup } from "./pages"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext"
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  const { authUser } = useAuthContext()
  // const navigate = useNavigate()

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     exact: true,
  //     element: authUser ? <Home /> : navigate("/login"),
  //   },
  //   {
  //     path: "/login",
  //     exact: true,
  //     element: authUser ? navigate("/") : <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     exact: true,
  //     element: authUser ? navigate("/") : <Signup />,
  //   },
  // ])
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
