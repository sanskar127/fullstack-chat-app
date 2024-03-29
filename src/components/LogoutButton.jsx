import LogoutIcon from '@mui/icons-material/Logout'
import useLogout from "../hooks/useLogout"

const LogoutButton = () => {
  const { logout, loading } = useLogout()
  return (
    <div className="mt-auto">
      {!loading ? (
        <LogoutIcon className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
