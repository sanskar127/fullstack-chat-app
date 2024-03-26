// import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
            <div>
                <label className="label p-2" htmlFor="uname">
                    <span className="text-base label-text">Username</span>
                </label>
                <input className="w-full input input-bordered h-10" type="text" name="uname" id="uname" placeholder="Enter Username" />
                
                <label className="label" htmlFor="passwd">
                    <span className="text-base label-text">Password</span>
                </label>
                <input className="w-full input input-bordered h-10" type="password" name="passwd" id="passwd" placeholder="Enter Password" />

                <a href='/' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Create Account </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
