import { Link } from "react-router-dom"

const GenderCheckBox = () => {
  return(
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>

      <div>
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  )
}

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Signup <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
            <div>
                <label className="label p-2" htmlFor="fname">
                    <span className="text-base label-text">Fullname</span>
                </label>
                <input className="w-full input input-bordered h-10" type="text" name="fname" id="fname" placeholder="Murari Lal" />
                
                <label className="label p-2" htmlFor="uname">
                    <span className="text-base label-text">Username</span>
                </label>
                <input className="w-full input input-bordered h-10" type="text" name="uname" id="uname" placeholder="murarilal" />
                
                <label className="label" htmlFor="passwd">
                    <span className="text-base label-text">Password</span>
                </label>
                <input className="w-full input input-bordered h-10" type="password" name="passwd" id="passwd" placeholder="Enter Password" />
                
                <label className="label" htmlFor="cpasswd">
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input className="w-full input input-bordered h-10" type="password" name="cpasswd" id="cpasswd" placeholder="Confirm Password" />

                <GenderCheckBox/>

                <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already have Account? </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2">Create Account</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
