import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          // opacity:1
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          // opacity:0
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="bg-white flex flex-col justify-end h-screen absolute bottom-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-bold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-600 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter a destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 bg-white">
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>



        <div className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">Uber Premium <span><i className="ri-user-3-fill"></i>4</span> </h4>
            <h5 className="font-medium text-sm">6 mins away</h5>
            <p className="font-normal text-xs text-gray">Affordable, compact rides </p>
          </div>
          <h2 className="text-lg font-semibold">$343.20 </h2>
        </div>

        <div className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span> </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray">Affordable, compact rides </p>
          </div>
          <h2 className="text-lg font-semibold">$193.20 </h2>
        </div>

        <div className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="" />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span> </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray">Affordable, compact rides </p>
          </div>
          <h2 className="text-lg font-semibold">$53.20 </h2>
        </div>

        <div className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">Auto <span><i className="ri-user-3-fill"></i>3</span> </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs text-gray">Affordable, compact rides </p>
          </div>
          <h2 className="text-lg font-semibold">$93.20 </h2>
        </div>


      </div>
    </div>
  );
};

export default Home;
