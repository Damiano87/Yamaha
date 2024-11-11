import express from "express";
import wishlistController from "../controllers/wishlistController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.use(verifyJWT);

router
  .route("/")
  .get(wishlistController.getWishlist)
  .post(wishlistController.addItem)
  .delete(wishlistController.deleteItem);

export default router;
