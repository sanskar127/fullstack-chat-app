import MessageInput from "./MessageInput";
import Messages from "./Messages"
import MessageIcon from '@mui/icons-material/Message'

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome John Doe</p>
        <p>Select a Chat to Start Messaging</p>
        <MessageIcon className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}

const MessageContainer = () => {
  const noChatSelected = false
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? <NoChatSelected /> : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            {/* <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>{" "} */}
            <span className="text-gray-100 font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
