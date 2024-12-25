const mongoose=require('mongoose');


const rideSchema=new mongoose.Schema({ 
   user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true

   },
   captain:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Captain',
  
   },
   pickup:{
      type:String,
      require:true,
   },
   destination:{
      type:String,
      require:true,
   },
   fare:{
      type:Number,
      require:true,
   },
    status:{
      type:String,
      enum:['pending','accepted','completed','cancel'],
      default:'pending'
    },
    duration:{
      type:Number,
    },
    distance:{
      type:Number,
    },
    paymentID:{

    type:String
    },
    orderId:{
      type:String
    },
    signature:{
      type:String
    },
    otp:{
      type:String,
      select:false,
      required:true,
    }

})

module.exports=mongoose.model('ride',rideSchema)