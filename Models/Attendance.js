import mongoose from "mongoose";

const attendanceSchema=new mongoose.Schema({


    email:{    //email Data Structure
        type:String,//Data Type
        required:true//All users Definetly has email  
    },
    date:{              //attendance Date
        type:Date,
        required:true,
        default:Date.now()
    },
    isattended:{            //attendance
        type:String,
        required:true,
        default:false
    }

})

const attendances=mongoose.model("attendances",attendanceSchema);
export default attendances;