import express from "express";
import { addPayment , updatePayment , getHalfpaid} from "../Controller/PaymentController.js";


const paymentRouter=express.Router();

paymentRouter.post("/add",addPayment);
paymentRouter.put("/add/:email",updatePayment);
paymentRouter.get("/",getHalfpaid);



export default paymentRouter;