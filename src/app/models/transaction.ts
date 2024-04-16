export interface Transaction {
  idTransaccion: number;
  idCuenta: number;
  montoTransaccion: number;
  destinoPago: string;
  motivo: string;
  idEstado: number;
  idTransaccionAutorizador: number;
  numeroAprobacion: number;
  idTipo_Transaccion: number;
  createdAt: string;
  updatedAt: string;
  IP: string;
}
