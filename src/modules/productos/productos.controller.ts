import { Request, Response } from "express";
import {
  createProducto,
  deleteProducto,
  getProductoById,
  listProductos,
  updateProducto,
} from "./productos.service";
import { HttpError } from "../../utils/http-error";
import { isValidObjectId } from "../../utils/is-valid-object-id";

const ensureValidId = (id: string): void => {
  if (!isValidObjectId(id)) {
    throw new HttpError("El identificador del producto no es valido", 400);
  }
};

const getRequestId = (req: Request): string => String(req.params.id);

export const getProductos = async (_req: Request, res: Response): Promise<void> => {
  const productos = await listProductos();

  res.status(200).json({
    ok: true,
    data: productos,
  });
};

export const getProducto = async (req: Request, res: Response): Promise<void> => {
  const productoId = getRequestId(req);
  ensureValidId(productoId);

  const producto = await getProductoById(productoId);

  if (!producto) {
    throw new HttpError("Producto no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    data: producto,
  });
};

export const postProducto = async (req: Request, res: Response): Promise<void> => {
  const producto = await createProducto(req.body);

  res.status(201).json({
    ok: true,
    message: "Producto creado correctamente",
    data: producto,
  });
};

export const putProducto = async (req: Request, res: Response): Promise<void> => {
  const productoId = getRequestId(req);
  ensureValidId(productoId);

  const producto = await updateProducto(productoId, req.body);

  if (!producto) {
    throw new HttpError("Producto no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    message: "Producto actualizado correctamente",
    data: producto,
  });
};

export const removeProducto = async (req: Request, res: Response): Promise<void> => {
  const productoId = getRequestId(req);
  ensureValidId(productoId);

  const producto = await deleteProducto(productoId);

  if (!producto) {
    throw new HttpError("Producto no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    message: "Producto eliminado correctamente",
    data: producto,
  });
};
