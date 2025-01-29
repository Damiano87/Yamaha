import express from "express";
import vehicleController from "../controllers/atvController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// public routes
router.get("/", vehicleController.getAllAtvs);
router.get("/:id", vehicleController.getSingleAtv);

// private routes
router.post("/", verifyJWT, vehicleController.createAtv);
router.patch("/", verifyJWT, vehicleController.updateAtv);
router.delete("/", verifyJWT, vehicleController.deleteAtv);

export default router;
