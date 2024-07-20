import mongoose from "./index.js";

const bookingScheema = new mongoose.Schema({
   roomId:{
    type:String,
    required:true
   },
   employeeId:{
    type:String,
    required:true
   },
   startTime:{
    type:Date,
    required:true
   },
   endTime:{
    type:Date,
    required:true
   },
   status:{
    type:Boolean,
    default:true
   }
},
{
    collection:'booking',
    versionKey:false
})

export default new mongoose.model('booking',bookingScheema)
