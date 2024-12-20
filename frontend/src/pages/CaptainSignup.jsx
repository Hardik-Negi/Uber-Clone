import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

import axios from 'axios'



const CaptainSignup = () => {
  
  const navigate=useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler =async (e) => {
    e.preventDefault();
    const captainData ={
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    };
     
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if(response.status===201){
      const data=response.data;
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setEmail("");
    setfirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleType('')
  };
  return (
    <div className="px-7 py-2 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-2 "
          src="https://toppng.com/uploads/preview/uber-logo-png-uber-logo-2018-11563110096yltfjpzwbm.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg w-full font-medium mb-2 ">
            What's our Captain's name?
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee]  w-1/2 rounded px-4 border py-2 text-lg placeholder:text-base outline-none"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 border w-1/2 py-2 text-lg placeholder:text-base outline-none"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2 ">
            What's our Captain's email
          </h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            autoComplete="off"
            className="bg-[#eeeeee] mb-6 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 border  py-2 text-lg placeholder:text-base outline-none"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              autoComplete="off"
              className="bg-[#eeeeee]  rounded px-4 border w-1/2 py-2 text-lg placeholder:text-base outline-none"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate"
            />
          </div>

          <div className="flex gap-4 mb-7">
            <input
              autoComplete="off"
              className="bg-[#eeeeee]  rounded px-4 border w-1/2 py-2 text-lg placeholder:text-base outline-none"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Vehicle Capacity"
            />

            <select
              required
              className="bg-[#eeeeee]  rounded px-4 border w-1/2 py-2 text-lg placeholder:text-base outline-none"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option className="placeholder:text-[6px]" value="" disabled>
                Select Vehicle Type{" "}
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">MotoCycle</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#111] text-white rounded px-4 mb-3 w-full  py-2 text-base placeholder:text-fff "
          >
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
