export interface OrdenCompra {
  idOrdenCompra?: number;
  costoTotal: number;
  codigoEstado: number;
  codigoOTP?: string;
  numeroAprobacion?: string;
  observaciones?: string;
  idCliente: number;
  idEstado: number;
  idEcommerce: number;
}
