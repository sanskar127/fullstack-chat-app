import { Home, Signin, Signup } from "./pages"
import { Toaster } from 'react-hot-toast'
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react"
import io from "socket.io-client"
// import { setSocket, setOnlineUsers } from "./slices/Socket/socketSlice"

const App = () => {
  const authUser = useSelector(state => state.auth.user)
  // const socket = useSelector(state => state.socket.socket)
  // const [socket, setSocket] = useState(null)
  // const [onlineUsers, setOnlineUsers] = useState([])
  const socket = io("/")

  useEffect(() => {
    // Example: Listen for 'message' event from server
    socket.on('message', (data) => {
      console.log('Received message from server:', data);
    });

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Signin />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
