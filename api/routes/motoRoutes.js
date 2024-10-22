import express from "express";
import vehicleController from "../controllers/vehicleController.js";

const router = express.Router();

router
  .route("/")
  .get(vehicleController.getAllMotos)
  .post(vehicleController.createMoto)
  .patch(vehicleController.updateMoto)
  .delete(vehicleController.deleteMoto);

router.route("/:id").get(vehicleController.getSingleMoto);

export default router;
