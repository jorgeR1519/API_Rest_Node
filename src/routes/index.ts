import { Router } from "express";
import clientesRoutes from "../modules/clientes/clientes.routes";
import productosRoutes from "../modules/productos/productos.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    message: "API running successfully",
    timestamp: new Date().toISOString(),
  });
});

router.use("/clientes", clientesRoutes);
router.use("/productos", productosRoutes);

export default router;
