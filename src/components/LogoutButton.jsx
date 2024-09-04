import LogoutIcon from '@mui/icons-material/Logout'
import { useSignout } from "../hooks/index"

const LogoutButton = () => {
  const { handler, isLoading } = useSignout()
  return (
    <div className="mt-auto">
      {!isLoading ? (
        <LogoutIcon className="w-6 h-6 text-white cursor-pointer" onClick={handler} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
