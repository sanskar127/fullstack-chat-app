import { Link } from "react-router-dom"
import { useSignin } from "../hooks/index"
import { useState } from "react"

const Login = () => {
  const [input, setInput] = useState({
    uname: "",
    passwd: ""
  })

  const { handler, isLoading } = useSignin()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handler(input)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-background-color bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign in <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="uname">
              <span className="text-base label-text">Username</span>
            </label>
            <input className="w-full input input-bordered h-10" type="text" name="uname" id="uname" placeholder="Enter Username" onChange={handleChange} value={input.uname || ''} />

            <label className="label" htmlFor="passwd">
              <span className="text-base label-text">Password</span>
            </label>
            <input className="w-full input input-bordered h-10" type="password" name="passwd" id="passwd" placeholder="Enter Password" onChange={handleChange} value={input.passwd || ''} />

            <Link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Create Account </Link>

            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2" disabled={isLoading}>{isLoading ? <span className="loading loading-spinner"></span> : "Login"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
