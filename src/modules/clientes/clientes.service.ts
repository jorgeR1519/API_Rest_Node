import Cliente from "./clientes.model";
import { ClienteBody } from "./clientes.types";

export const listClientes = async () => Cliente.find().sort({ createdAt: -1 });

export const getClienteById = async (id: string) => Cliente.findById(id);

export const createCliente = async (payload: ClienteBody) => Cliente.create(payload);

export const updateCliente = async (id: string, payload: Partial<ClienteBody>) =>
  Cliente.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

export const deleteCliente = async (id: string) => Cliente.findByIdAndDelete(id);
