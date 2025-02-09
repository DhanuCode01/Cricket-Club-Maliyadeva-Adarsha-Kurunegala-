import attendances from "../Models/Attendance.js";
import users from "../Models/User.js";
import { isToken } from "../Validation/TokenValidation.js";


export async function addAttendance(req,res) {
    isToken(req,res);           //check if you have token

    if(req.user.type !="instructor"){                //check  authorization
        res.status(403).json({
            message:"You are not authorized to perform this action"
        })
        return
    }

    try {
        const data=req.body;                        //assigning reqest body details 
        const attendance=new attendances(data);           //add new payment

        const user =await users.findOne({email:req.body.email});   //Is there a user with this email address?
        if(user != null){
                await attendance.save()
                res.status(200).json({
                    Message:"attendance Saved Successfully"});
        }else{
                res.status(404).json({error:"pleace check email "});
        }
    }catch(error){                                                              //If the lines are not running, it is a connection error.
        res.status(500).json({error:"payment Saved Unsuccessfully"})
    }
    
}