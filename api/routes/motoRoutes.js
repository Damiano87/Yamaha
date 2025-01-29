import express from "express";
import vehicleController from "../controllers/motoController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// public routes
router.get("/", vehicleController.getAllMotos);
router.get("/:id", vehicleController.getSingleMoto);

// private routes
router.post("/", verifyJWT, vehicleController.createMoto);
router.patch("/", verifyJWT, vehicleController.updateMoto);
router.delete("/", verifyJWT, vehicleController.deleteMoto);

export default router;
