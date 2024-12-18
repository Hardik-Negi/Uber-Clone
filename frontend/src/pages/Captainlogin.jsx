import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [captainData,setCaptainData]=useState({});
   
     const submitHandler = (e) => {
       e.preventDefault();
       setCaptainData({
         email:email,
         password:password
       })
       setEmail("");
       setPassword("");
     };
  return (
   <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5 "
          src="https://toppng.com/uploads/preview/uber-logo-png-uber-logo-2018-11563110096yltfjpzwbm.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white rounded px-4 mb-3 w-full  py-2 text-base placeholder:text-fff "
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?
          <Link to="/signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="flex justify-center items-center bg-[#d5622d] text-white rounded px-4 mb-5 w-full  py-2 text-base placeholder:text-fff ">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin