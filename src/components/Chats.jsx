import Conversation from "./Conversation"
// import useGetConversations from "../hooks/useGetConversations"

const Chats = () => {
  // const { conversations } = useGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation/>
      {/* {conversations} */}
    </div>
  )
}

export default Chats
