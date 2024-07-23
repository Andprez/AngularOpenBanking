export interface ProductoF {
  idProducto?: number;
  idEntidadFinanciera: number;
  idBilletera_CBITBank: number;
  idEstado: number;
  idSubtipo_Producto: number;
  idDetalles_SolicitudP?: number;
  usuario?: string;
  password?: string;
  numeroCuenta: string;
  tasaInteres?: number;
  plazo?: number;
  montoCredito?: number;
  cuotaMensual?: number;
  seguroVida?: number;
  tasaEfectivaAnual?:number;
  tasaMensualVencida?: number;
  vtua?: number;
}
