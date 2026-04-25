import { Request, Response } from "express";
import {
  createCliente,
  deleteCliente,
  getClienteById,
  listClientes,
  updateCliente,
} from "./clientes.service";
import { HttpError } from "../../utils/http-error";
import { isValidObjectId } from "../../utils/is-valid-object-id";

const ensureValidId = (id: string): void => {
  if (!isValidObjectId(id)) {
    throw new HttpError("El identificador del cliente no es valido", 400);
  }
};

const getRequestId = (req: Request): string => String(req.params.id);

export const getClientes = async (_req: Request, res: Response): Promise<void> => {
  const clientes = await listClientes();

  res.status(200).json({
    ok: true,
    data: clientes,
  });
};

export const getCliente = async (req: Request, res: Response): Promise<void> => {
  const clienteId = getRequestId(req);
  ensureValidId(clienteId);

  const cliente = await getClienteById(clienteId);

  if (!cliente) {
    throw new HttpError("Cliente no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    data: cliente,
  });
};

export const postCliente = async (req: Request, res: Response): Promise<void> => {
  const cliente = await createCliente(req.body);

  res.status(201).json({
    ok: true,
    message: "Cliente creado correctamente",
    data: cliente,
  });
};

export const putCliente = async (req: Request, res: Response): Promise<void> => {
  const clienteId = getRequestId(req);
  ensureValidId(clienteId);

  const cliente = await updateCliente(clienteId, req.body);

  if (!cliente) {
    throw new HttpError("Cliente no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    message: "Cliente actualizado correctamente",
    data: cliente,
  });
};

export const removeCliente = async (req: Request, res: Response): Promise<void> => {
  const clienteId = getRequestId(req);
  ensureValidId(clienteId);

  const cliente = await deleteCliente(clienteId);

  if (!cliente) {
    throw new HttpError("Cliente no encontrado", 404);
  }

  res.status(200).json({
    ok: true,
    message: "Cliente eliminado correctamente",
    data: cliente,
  });
};
