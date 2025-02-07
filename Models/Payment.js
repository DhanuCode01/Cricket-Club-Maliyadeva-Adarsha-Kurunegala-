import mongoose from "mongoose";


const paymentSchema=new  mongoose.Schema({
    fee:{    //class feeData Structure
        type:Number,//Data Type
        required:true,//All users Definetly has fee
    },
    month:{  //paid month Data Structure
        type:String,
        required:true
    },
    date:{    //date Data Structure
        type:Date,
        required:true,
        default:Date.now()
    },
    paymentType:{   //cash or online
        type:String,
        required:true
    }
})

const payment=mongoose.model("payment",paymentSchema)
export default payment;