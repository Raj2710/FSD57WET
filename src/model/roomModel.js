import mongoose from "./index.js";


const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Room Name required"]
    },
    capacity:{
        type:Number,
        min:[10,"Minimum 10 Seat is required"],
        required:true
    },
    amenities:{
        type:Array,
        default:[]
    },
    images:{
        type:Array,
        default:[]
    },
    status:{
        type:Boolean,
        default:true
    }

},
{
    collection:'room',
    versionKey:false
})

export default new mongoose.model('room',roomSchema)
