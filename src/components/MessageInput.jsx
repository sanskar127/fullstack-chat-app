import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Send a message"
          aria-label="Message input"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200 focus:outline-none"
          aria-label="Send"
        >
          <IoMdSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
