import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { Home, Login, Signup } from "./pages"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext"

const App = () => {
  const { authUser } = useAuthContext()
  const navigate = useNavigate()

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: authUser ? <Home /> : navigate("/"),
    },
    {
      path: "/login",
      exact: true,
      element: authUser ? navigate("/") : <Login />,
    },
    {
      path: "/signup",
      exact: true,
      element: authUser ? navigate("/") : <Signup />,
    },
  ])
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
