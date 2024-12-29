import React, { useRef, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRide, setFinishRide] = useState(false);
  const finishRideRef = useRef(null);
  const location=useLocation()
  const rideData=location.state?.ride;
  useGSAP(
    function () {
      if (finishRide) {
        gsap.to(finishRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRide]
  );
  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-home"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
       <LiveTracking/>
      </div>
      <div onClick={()=>{
        setFinishRide(true)
      }} className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative">
        <h5
          onClick={() => {}}
          className="p-1 text-center absolute top-0 w-[95%] "
        >
          {" "}
          <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRideRef}
        className="fixed w-full z-10 translate-y-full bottom-0  px-3 py-10 bg-white pt-12"
      >
        <FinishRide 
        ride={rideData}
        setFinishRide={setFinishRide}
        
         />
      </div>
    </div>
  );
};

export default CaptainRiding;
