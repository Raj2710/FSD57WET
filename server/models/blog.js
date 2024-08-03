import {mongoose} from './index.js'

const blogScheema = new mongoose.Schema({
    blogId:{
        type:String,
        required:[true,'blogId is required']
    },
    userId:{
        type:String,
        required:[true,'userId is required']
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum: {
            values: ['Pending', 'Approved', 'Rejected'],
            message: '{VALUE} is not supported'
          },
        default:'Pending'
    }

},
{
    collection:'blogs',
    versionKey:false
})

const blogModel = new mongoose.model('blogs',blogScheema)

export default blogModel