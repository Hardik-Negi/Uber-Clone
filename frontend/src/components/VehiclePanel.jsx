import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
       <h5 onClick={()=>{
        props.setVehiclePanel(false);
      }} className="p-1 text-center absolute top-0 w-[93%] " > <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=>props.setConfirmRidePanel(true)} className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Uber Premium{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>{" "}
            </h4>
            <h5 className="font-medium text-sm">6 mins away</h5>
            <p className="font-normal text-xs text-gray">
              Affordable, compact rides{" "}
            </p>
          </div>
          <h2 className="text-lg font-semibold">$343.20 </h2>
        </div>

        <div onClick={()=>props.setConfirmRidePanel(true)} className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>{" "}
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray">
              Affordable, compact rides{" "}
            </p>
          </div>
          <h2 className="text-lg font-semibold">$193.20 </h2>
        </div>

        <div onClick={()=>props.setConfirmRidePanel(true)} className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>{" "}
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray">
              Affordable, compact rides{" "}
            </p>
          </div>
          <h2 className="text-lg font-semibold">$53.20 </h2>
        </div>

        <div onClick={()=>props.setConfirmRidePanel(true)} className="flex border-2 mb-2 hover:border-black rounded-xl w-full p-3 items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>{" "}
            </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs text-gray">
              Affordable, compact rides{" "}
            </p>
          </div>
          <h2 className="text-lg font-semibold">$93.20 </h2>
        </div>
    </>
  ) 
}

export default VehiclePanel