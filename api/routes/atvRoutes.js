import express from "express";
import vehicleController from "../controllers/atvController.js";

const router = express.Router();

router
  .route("/")
  .get(vehicleController.getAllAtvs)
  .post(vehicleController.createAtv)
  .patch(vehicleController.updateAtv)
  .delete(vehicleController.deleteAtv);

router.route("/:id").get(vehicleController.getSingleAtv);

export default router;
