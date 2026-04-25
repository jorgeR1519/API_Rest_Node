import Producto from "./productos.model";
import { ProductoBody } from "./productos.types";

export const listProductos = async () => Producto.find().sort({ createdAt: -1 });

export const getProductoById = async (id: string) => Producto.findById(id);

export const createProducto = async (payload: ProductoBody) => Producto.create(payload);

export const updateProducto = async (id: string, payload: Partial<ProductoBody>) =>
  Producto.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

export const deleteProducto = async (id: string) => Producto.findByIdAndDelete(id);
