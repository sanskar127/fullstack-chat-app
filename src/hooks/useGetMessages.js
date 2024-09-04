// hooks/useGetMessages.js
import { useSelector } from 'react-redux';
import { useGetMessagesQuery } from '../api/chatApi';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);

  const { data: messages = [], isLoading } = useGetMessagesQuery(selectedConversation?._id, {
    skip: !selectedConversation?._id,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { messages, isLoading };
};

export default useGetMessages;
