import payment from "../Models/Payment.js";
import { isToken } from "../Validation/TokenValidation.js";



export async function addPayment(req,res){              //add payment
    isToken(req,res);                                   //check if you have token

    
        if(req.user.type !="instructor"){                //check  authorization
            res.status(403).json({
                message:"You are not authorized to perform this action"
            })
            return
        }


        const data=req.body;                        //assigning reqest body details 
        const payments=new payment(data);           //add new payment

       try {

        await payments.save();                      //save data    
        res.status(200).json({
            Message:"payment Saved Successfully"})

        
        }catch(error){                                                              //If the lines are not running, it is a connection error.
            res.status(500).json({error:"payment Saved Unsuccessfully"})
        }
     

}