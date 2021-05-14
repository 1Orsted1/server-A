const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("events");

  const getUsers = async () => {
    const cnx = await getConnection();
    const request = await cnx.request();
    return await request.query(sqlQueries.consultaPrueva);
  };

  const setUser = async ({
    usuario,
    nombre,
    apellido_p,
    apellido_m,
    tipo_usuario,
    fecha_alta,
    estado,
    fecha_baja,
    clave,
    email,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    const passwordBuffer = await new Buffer.from(clave);
    request.input("usuario", sql.NVarChar(20), usuario);
    request.input("nombre", sql.NVarChar(20), nombre);
    request.input("apellido_p", sql.NVarChar(20), apellido_p);
    request.input("apellido_m", sql.NVarChar(20), apellido_m);
    request.input("tipo_usuario", sql.NVarChar(20), tipo_usuario);
    request.input("fecha_alta", sql.Date, fecha_alta);
    request.input("estado", sql.Bit, estado);
    request.input("fecha_baja", sql.Date, fecha_baja);
    request.input("clave", sql.VarBinary(sql.MAX), passwordBuffer);
    request.input("email", sql.NVarChar(30), email);
    return await request.query(sqlQueries.insertarPrueba);
  };

  return { getUsers, setUser };
};
module.exports = { register };
