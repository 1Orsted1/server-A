INSERT INTO usuarios (
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
)
VALUES(default, @usuario, @nombre,@apellido_p,@apellido_m, @tipo_usuario,@fecha_alta,@estado,@fecha_baja, @clave,@email)


