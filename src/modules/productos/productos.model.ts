import { InferSchemaType, Model, Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    },
    descripcion: {
      type: String,
      trim: true,
      default: "",
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [0, "El precio no puede ser negativo"],
    },
    stock: {
      type: Number,
      required: [true, "El stock es obligatorio"],
      min: [0, "El stock no puede ser negativo"],
    },
    categoria: {
      type: String,
      trim: true,
      default: "General",
    },
    sku: {
      type: String,
      required: [true, "El sku es obligatorio"],
      unique: true,
      trim: true,
      uppercase: true,
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

export type ProductoDocument = InferSchemaType<typeof productoSchema>;
export type ProductoModel = Model<ProductoDocument>;

const Producto = model<ProductoDocument, ProductoModel>("Producto", productoSchema);

export default Producto;
