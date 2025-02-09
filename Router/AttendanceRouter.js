import express from "express";
import { addAttendance } from "../Controller/AttendanceController.js";


const attendanceRouter=express.Router();

attendanceRouter.post("/add",addAttendance);




export default attendanceRouter;