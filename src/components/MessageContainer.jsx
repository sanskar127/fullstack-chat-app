import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import MessageIcon from '@mui/icons-material/Message';
import useGetConversations from "../hooks/useGetConversations";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../slices/Conversation/conversationsSlice";

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome John Doe</p>
        <p>Select a Chat to Start Messaging</p>
        <MessageIcon className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const { conversations } = useGetConversations();
  const dispatch = useDispatch();
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);

  useEffect(() => {
    return () => {
      dispatch(setSelectedConversation(null));
    };
  }, [dispatch]);

  const isSelected = selectedConversation ? conversations.some(conv => conv._id === selectedConversation._id) : false;

  return (
    <div className="md:w-full flex flex-col">
      {isSelected ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-gray-100 font-bold">{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : <NoChatSelected />}
    </div>
  );
};

export default MessageContainer;
