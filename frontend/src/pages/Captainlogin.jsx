import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';


const Captainlogin = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const {captain,setCaptain}=React.useContext(CaptainDataContext);
     const navigate=useNavigate();
   
     const submitHandler =async (e) => {
       e.preventDefault();
       const captainData={
         email:email,
         password
       }
      
       const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);

       if(response.status===200){
        const data=response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
       }
      

       setEmail("");
       setPassword("");
     };
  return (
   <div className="py-4 px-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-2 "
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
           <Link to="/captain-signup" className=" ml-1 text-blue-600">
             Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/signup' className="flex justify-center items-center bg-[#d5622d] text-white rounded px-4 mb-5 w-full  py-2 text-base placeholder:text-fff ">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin