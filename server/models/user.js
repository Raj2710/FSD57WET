import {mongoose} from './index.js'
import { validateEmail,validateMobile } from "../common/validation.js";

const userScheema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,'User Id is required']
    },
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
            values: ['User', 'Admin'],
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
    collection:'users',
    versionKey:false
})

const userModel = new mongoose.model('users',userScheema)

export default userModel