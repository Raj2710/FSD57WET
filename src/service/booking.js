import bookingModel from '../model/bookingModel.js'

const checkAvailablity = async(roomId,startTime,endTime)=>{
    try {
        let sDT = new Date(startTime).toISOString()
        let eDT = new Date(startTime).toISOString()
        let booking = await bookingModel.find(
            {
                roomId:roomId,
                startTime:{$lte:sDT},
                endTime:{$gte:eDT}
            }
    )
        return booking.length===0
    } catch (error) {
        throw error
    }
}

const getAllBooking = async(req,res)=>{
    try {
        let {roomId,date} = req.params;
        let sDate = new Date(date)
        let eDate = new Date(date)
        eDate.setDate(eDate.getDate()+1)
        let bookings = await bookingModel.find({$and:[
            {roomId:{$eq:roomId}},
            {startTime:{$gte:sDate.toISOString()}},
            {endTime:{$lte:eDate.toISOString()}}
        ]})
        
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:bookings
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const createBooking = async(req,res)=>{
    try {
        let {roomId,employeeId,startTime,endTime} = req.body
        if(await checkAvailablity(roomId,startTime,endTime))
        {
            await bookingModel.create({
                roomId,
                employeeId,
                startTime:new Date(startTime),
                endTime:new Date(endTime)
            })

            res.status(201).send({
                message:"Booking Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Room Already Booked for Selected Time"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

export default {
    getAllBooking,
    createBooking
}