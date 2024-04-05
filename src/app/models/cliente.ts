export interface Cliente {
  idCliente?: number;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  numeroIdentificacion: string;
  idTipoIdentificacion: number;
  telefono: string;
  email: string;
  direccion: string;
  IP?: string;
  idBilleteraCBITBank?: number;
  fechaNacimiento: Date;
  fechaExpedicion: Date;
  ciudadExpedicion: number;
  idAnexos?: number;
}
