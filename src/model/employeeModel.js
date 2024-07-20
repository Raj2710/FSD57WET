import mongoose from "./index.js";
import { validateEmail,validateMobile } from "../common/Valdations.js";

const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name is required"]
    },
    lastName:{
        type:String,
        required:[true,"Last Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validator: validateEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    mobile:{
        type:String,
        required:[true,"Mobile is required"],
        validate:{
            validator: validateMobile,
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    role:{
        type:String,
        enum: {
            values: ['Employee', 'Admin'],
            message: '{VALUE} is not supported'
          }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean,
        default:true
    }

},
{
    collection:'employee',
    versionKey:false
})

const employeeModel = new mongoose.model('employee',employeeSchema)

export default employeeModel;