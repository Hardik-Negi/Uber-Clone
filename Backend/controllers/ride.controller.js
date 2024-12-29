const rideService = require("../services/ride.service");
const mapService = require("../services/map.service");
const { validationResult } = require("express-validator");
const { sendMessageToSocketId } = require("../socket");
const rideModels = require("../models/ride.models");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination, vehicleType } = req.body;
  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup);

    console.log(pickupCoordinates);

    const captainInRadius = await mapService.getCaptainInTheRadius(
      pickupCoordinates.latitude,
      pickupCoordinates.longitude,
      2
    );

    ride.otp = "";

    const rideWithUser=await rideModels.findOne({_id:ride._id}).populate('user')
    captainInRadius.map(async (captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports.confirmRide=async(req,res)=>{
   const errors=validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }
   const {rideId}=req.body;

   try{
      const ride=await rideService.confirmRide({rideId,captain:req.captain})

      sendMessageToSocketId(ride.user.socketId,{
         event:'ride-confirmed',
         data:ride
      })
      return res.status(200).json(ride);
   }catch(err){
    console.log(err);
      return res.status(500).json({message:err.message})
   }
}

module.exports.startRide=async(req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }

  const {rideId,otp}=req.query;

  try{
    const ride=await rideService.startRide({rideId,otp,captain:req.captain});
    sendMessageToSocketId(ride.user.socketId,{
      event:'ride-started',
      data:ride
    })
    return res.status(200).json(ride);
  }catch(err){
    return res.status(500).json({message:err.message})
  }
}

module.exports.endRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
      const ride = await rideService.endRide({ rideId, captain: req.captain });

      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-ended',
          data: ride
      })



      return res.status(200).json(ride);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  } s
}