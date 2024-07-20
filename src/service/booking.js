const getAllBooking = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

export default {
    getAllBooking
}