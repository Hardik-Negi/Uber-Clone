import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div>
      {locations.map((item, index) => {
        return (
          <div onClick={()=>{
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
            key={index}
            className="flex gap-4 border-2 border-gray-50 active:border-black my-2 p-3 rounded-xl  justify-start items-center"
          >
            <h2 className="bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center ">
              <i className="ri-map-pin-fill "></i>
            </h2>
            <h4 className="font-medium">{item}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
