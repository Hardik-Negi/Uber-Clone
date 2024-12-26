import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestions) => {
    if (activeField === "pickup") {
      setPickup(suggestions.description);
    } else if (activeField === "destination") {
      setDestination(suggestions.description);
    }
  };
  
  console.log(suggestions)
  return (
    <div>
      {suggestions && suggestions.map((item, index) => (
        <div
         key={index}
          onClick={() => {
            handleSuggestionClick(item);
          }}
         
          className="flex gap-4 border-2 border-gray-50 active:border-black my-2 p-3 rounded-xl  justify-start items-center"
        >
          <h2 className="bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center ">
            <i className="ri-map-pin-fill "></i>
          </h2>
          <h4 className="font-medium">{item.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
