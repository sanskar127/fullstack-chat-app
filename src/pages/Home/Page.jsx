import MessageContainer from "../../components/MessageContainer"
import Sidebar from "../../components/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-screen md:h-[96vh] md:w-screen rounded-lg overflow-hidden bg-background-color bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
