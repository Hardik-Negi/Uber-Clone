import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        {" "}
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex flex-col justify-between gap-2 items-center">
        <img className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab,Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab,Bhopal</p>
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
        <button onClick={()=>{
          props.setVehicleFound(true);
          props.setConfirmRidePanel(false);
          props.setVehiclePanel(false);        }} className="w-full mt-5 bg-green-600 textt-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
