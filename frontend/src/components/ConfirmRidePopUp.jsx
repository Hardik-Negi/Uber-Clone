import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp,setOtp]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        {" "}
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this Ride to Start
      </h3>

      <div className="flex items-center justify-between  mt-4 p-3 bg-yellow-300 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between gap-2 items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input onClick={(e)=>setOtp(e.target.value )} className="bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-3" type="text" 
            value={otp}
            placeholder="Enter OTP " />
          <Link
            to={"/captain-riding"}
            className="w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-full mt-2 text-lg  text-white bg-red-700 font-semibold p-3 rounded-lg"
          >
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
