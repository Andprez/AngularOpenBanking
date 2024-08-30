export interface Transaction {
  idTransaccion?: number;
  idTipo_Transaccion: number;
  idEstado: number;
  idProducto: number;
  idOrdenCompra?: number;
  IP?: string;
  montoTransaccion: number;
  destinoPago: string;
  motivo: string;
  idTransaccionAutorizador: string;
  numeroAprobacion: string;
  createdAt?: string;
  updatedAt?: string;
}
