import { InferSchemaType, Model, Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "El email no tiene un formato valido"],
    },
    telefono: {
      type: String,
      required: [true, "El telefono es obligatorio"],
      trim: true,
    },
    direccion: {
      type: String,
      trim: true,
      default: "",
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export type ClienteDocument = InferSchemaType<typeof clienteSchema>;
export type ClienteModel = Model<ClienteDocument>;

const Cliente = model<ClienteDocument, ClienteModel>("Cliente", clienteSchema);

export default Cliente;
