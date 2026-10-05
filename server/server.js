import express from "express";
import { connectDB } from "./src/config/db.js";
import Route from "./src/routes/busRoute.js";

const app = express()

app.use(express.json());

const PORT = 1129;

connectDB()

app.get('/routes', (req, res) => {
    res.json({message: "Your request was received"})
})

app.post('/routes', async (req, res) => {
    try {
        const route = await Route.create(req.body);
        res.status(201).json(route);
    } catch (error) {
        res.send(500).json({message: "faild to create a route", error})
    }
})

app.listen(PORT, () => {
    console.log('you app is running at port', PORT)
})