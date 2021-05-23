class User {
  constructor(
    id_usuario,
    usuario,
    nombre,
    apellido_p,
    apellido_m,
    tipo_usuario,
    fecha_alta,
    estado,
    fecha_baja,
    clave,
    email
  ) {
    this.id_usuario = id_usuario;
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido_p = apellido_p;
    this.apellido_m = apellido_m;
    this.tipo_usuario = tipo_usuario;
    this.fecha_alta = fecha_alta;
    this.estado = estado;
    this.fecha_baja = fecha_baja;
    this.clave = clave;
    this.email = email;
  }
}

module.exports = User;
