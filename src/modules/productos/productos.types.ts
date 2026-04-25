export interface ProductoBody {
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoria?: string;
  sku: string;
  activo?: boolean;
}
