import LogoutIcon from '@mui/icons-material/Logout'
import useAuth from "../hooks/useAuth"

const LogoutButton = () => {
  const { SignOutHandler, signoutLoading } = useAuth()
  return (
    <div className="mt-auto">
      {!signoutLoading ? (
        <LogoutIcon className="w-6 h-6 text-white cursor-pointer" onClick={SignOutHandler} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
