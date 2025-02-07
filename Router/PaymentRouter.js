import express from "express";
import { addPayment ,updatePayment} from "../Controller/PaymentController.js";


const paymentRouter=express.Router();

paymentRouter.post("/add",addPayment);
paymentRouter.put("/add/:email",updatePayment);


export default paymentRouter;