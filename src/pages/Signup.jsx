import { useState } from "react"
import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"
import useSignup from "../hooks/useSignup"

const GenderCheckBox = ({ value, onChange }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${value === 'male' ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input type="checkbox" 
          className="checkbox 
          border-slate-900" 
          checked={value === 'male'}
          onChange={() => onChange('male')}
          />
        </label>
      </div>

      <div>
        <label className={`label gap-2 cursor-pointer ${value === 'male' ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input type="checkbox" 
          className="checkbox 
          border-slate-900" 
          checked={value === 'female'}
          onChange={() => onChange('female')}
          />
        </label>
      </div>
    </div>
  )
}

GenderCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    uname: "",
    passwd: "",
    cpasswd: "",
    gender: ""
  })

  const { signup, loading } = useSignup()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleCheckbox = (gender) => {
    setInput({ ...input, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(input)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-background-color bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="fullname">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input className="w-full input input-bordered h-10"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Murari Lal"
              onChange={handleChange}
              value={input.fullname}
            />

            <label className="label p-2" htmlFor="uname">
              <span className="text-base label-text">Username</span>
            </label>
            <input className="w-full input input-bordered h-10"
              type="text" name="uname"
              id="uname" placeholder="murarilal"
              onChange={handleChange}
              value={input.uname}
            />

            <label className="label" htmlFor="passwd">
              <span className="text-base label-text">Password</span>
            </label>
            <input className="w-full input input-bordered h-10"
              type="password" name="passwd"
              id="passwd"
              placeholder="Enter Password"
              onChange={handleChange}
              value={input.passwd}
            />

            <label className="label" htmlFor="cpasswd">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input className="w-full input input-bordered h-10"
              type="password"
              name="cpasswd"
              id="cpasswd"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={input.cpasswd}
            />

            <GenderCheckBox onChange={ handleCheckbox } value={ input.gender } />

            <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already have Account? </Link>

            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
