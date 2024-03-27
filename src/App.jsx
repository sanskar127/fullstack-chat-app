import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Signup } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login/>,
  },
  {
    path: "/signup",
    exact: true,
    element: <Signup/>,
  },
])

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
