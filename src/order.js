class Order {
  constructor(
    id_usuario,
    usuario,
    nombre,
    apellido_p,
    apellido_m,
    tipo_usuario,
    fecha_alta,
    status,
    fecha_baja,
    contraseña,
    email
  ) {
    this.id_usuario = id_usuario;
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido_p = apellido_p;
    this.apellido_m = apellido_m;
    this.tipo_usuario = tipo_usuario;
    this.fecha_alta = fecha_alta;
    this.status = status;
    this.fecha_baja = fecha_baja;
    this.contraseña = contraseña;
    this.email = email;
  }
}

module.exports = Order;
