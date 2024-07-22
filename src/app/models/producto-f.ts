export interface ProductoF {
  idProducto?: number;
  idTipo_Producto: number;
  idSubtipo_Producto?: number;
  idEntidadFinanciera: number;
  idBilletera_CBITBank: number;
  idEstado: number;
  usuario?: string;
  password: string;
  numeroProducto: string;
  numeroCuenta?: string;
}
