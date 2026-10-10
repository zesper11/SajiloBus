import express from "express";
import { connectDB } from "./src/config/db.js";
import busRoute from "./src/rou/busRoute.js";

const app = express()

app.use(express.json());

app.use("/routes", busRoute);

const PORT = 1129;

connectDB()


app.listen(PORT, () => {
    console.log('you app is running at port', PORT)
})