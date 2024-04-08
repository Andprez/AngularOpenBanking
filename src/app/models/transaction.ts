export interface Transaction {
  idTransaccion: string;
  destinoPago: string;
  valorCompra: number;
  motivo: string;
  fechaTransaccion: string;
  numeroAprobacion: string;
  estado: string;
  idTransaccionAutorizador: string;
  codigoError: string;
  mensajeError: string;
}
