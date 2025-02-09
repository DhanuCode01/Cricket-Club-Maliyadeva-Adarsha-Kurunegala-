import express from "express";
import { addPayment , updatePayment , getHalfpaid, getUnpaid} from "../Controller/PaymentController.js";


const paymentRouter=express.Router();

paymentRouter.post("/add",addPayment);
paymentRouter.put("/add/:email",updatePayment);
paymentRouter.get("/",getHalfpaid);
paymentRouter.get("/user",getUnpaid);


export default paymentRouter;