import { Router } from "express";
import { asyncHandler } from "../../middlewares/async-handler.middleware";
import {
  getCliente,
  getClientes,
  postCliente,
  putCliente,
  removeCliente,
} from "./clientes.controller";

const router = Router();

router.get("/", asyncHandler(getClientes));
router.get("/:id", asyncHandler(getCliente));
router.post("/", asyncHandler(postCliente));
router.put("/:id", asyncHandler(putCliente));
router.delete("/:id", asyncHandler(removeCliente));

export default router;
