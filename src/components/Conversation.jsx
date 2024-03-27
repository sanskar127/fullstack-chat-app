import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const Conversation = () => {
  return (
    <div className="conversation-item flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="avatar-image-wrapper w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar image" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">John Doe</p>
          <span className="text-xl"> <NavigateNextIcon className="text=xl" /> </span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Conversation;
