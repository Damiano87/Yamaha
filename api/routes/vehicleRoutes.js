import express from "express";
import vehicleController from "../controllers/vehicleController.js";

const router = express.Router();

router
  .route("/atv")
  .get(vehicleController.getAllAtvs)

  .post(vehicleController.createAtv)
  .patch(vehicleController.updateAtv)
  .delete(vehicleController.deleteAtv);

router.route("/atv/:id").get(vehicleController.getSingleAtv);

// router
//   .route("/moto")
//   .get(vehicleController.getAllMotos)
//   .post(vehicleController.createMoto)
//   .patch(vehicleController.updateMoto)
//   .delete(vehicleController.deleteMoto);

export default router;
