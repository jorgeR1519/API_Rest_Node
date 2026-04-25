import { Router } from "express";
import { asyncHandler } from "../../middlewares/async-handler.middleware";
import {
  getProducto,
  getProductos,
  postProducto,
  putProducto,
  removeProducto,
} from "./productos.controller";

const router = Router();

router.get("/", asyncHandler(getProductos));
router.get("/:id", asyncHandler(getProducto));
router.post("/", asyncHandler(postProducto));
router.put("/:id", asyncHandler(putProducto));
router.delete("/:id", asyncHandler(removeProducto));

export default router;
