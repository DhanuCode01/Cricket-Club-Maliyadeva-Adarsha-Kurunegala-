import payment from "../Models/Payment.js";
import { isToken } from "../Validation/TokenValidation.js";



export async function addPayment(req,res){              //add payment       //Making a payment for the first time
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



export async function updatePayment(req,res) {         //update entered payment
    
    isToken(req,res);                                   //check if you have token

    try{
            if(req.user.type =="instructor"){                //check  authorization

                const data = req.body;

                const payments=await payment.findOne({email:req.params.email}); 

                        if(payments==null){                                      //Check if you have paid anything in the past
                            res.status(404).json({
                                message:"You have not paid any money."
                            })
                            return;
                        }else{
                             
                            const RemainingaAmount=5000-payments.fee;                    //Calculating the remaining amount to be paid

                                        if(RemainingaAmount==data.fee){                     //Checking whether the remaining amount is equal to the amount paid

                                    
                                            await payment.updateOne({email:req.params.email},{fee :5000});  //If so, just update the fee.      
                                            res.status(200).json({
                                            message:"paid Successfully"});

                                            return;

                                        }else {
                                            res.status(403).json({
                                                message:"paid unsuccessfully Enter the amount correctly."});

                                            return;
                                        }
                            
                            
                        }

                
                
            }else{
                res.status(403).json({

                    message:"You are not authorized to perform this action"

                })
                return
            }

     }catch(error){  
        console.log(error);                                                    //If the lines are not running, it is a connection error.
        res.status(500).json({
           error:"database connection unsuccessfully"})
        }

}

