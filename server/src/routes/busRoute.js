
import express from "express";
import { createRoute } from "../controllers/busRouteController.js";

const router = express.Router();

router.post("/", createRoute);

export default router;