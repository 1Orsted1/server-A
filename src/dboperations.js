var config = require("./config");
const getConnection = require("./data/index");

//En este se obitnen la informacion respuesta de los query
async function getOrders() {
  try {
    const myConnection = await getConnection(config.sql);
    const users = await myConnection.getEvents.getUsers();
    return users.recordsets;

    //console.log(y)
    //console.log(data.register)
    //let pool = await sql.connect(config.sql);
    // let users = await pool.request().query("SELECT * FROM usuarios");
    //return users.recordset;
  } catch (error) {
    console.log(error);
  }
}
async function setData(data) {
  try {
    const myConnection = await getConnection(config.sql);
    const addU = await myConnection.getEvents.setUser(data);
    return addU.recordsets;
    // console.log("esta es la data\n>"+data.estado)
    //  let pool = await sql.connect(config.sql);
    
    //  let users = await pool
    //    .request()
    //    .input("usuario", sql.VarChar(20), data.usuario)
    //    .input("nombre", sql.VarChar(20), data.nombre)
    //    .input("apellido_p", sql.VarChar(20), data.apellido_p)
    //    .input("apellido_m", sql.VarChar(20), data.apellido_m)
    //    .input("tipo_usuario", sql.VarChar(20), data.tipo_usuario)
    //    .input("fecha_alta", sql.DateTime, data.fecha_alta)
    //    .input("estado", sql.Bit, data.estado)
    //    .input("fecha_baja", sql.DateTime, data.fecha_baja)
    //    .input("clave", sql.VarChar(12), data.clave)
    //    .input("email", sql.VarChar(30), data.email)
    //        .query(

    //            "INSERT INTO usuarios (  id_usuario,  usuario, nombre, apellido_p, apellido_m, tipo_usuario, fecha_alta,estado, fecha_baja, clave, email)VALUES(default, @usuario, @nombre, @apellido_p,@apellido_m,@tipo_usuario ,@fecha_alta, @estado, @fecha_baja,@clave, @email)"
      
    //    );
    //  return users.recordset;
  } catch (error) {
    console.log(error);
  }
}

async function setNewUser(data) {
  try {
    const myConnection = await getConnection(config.sql);
    const addU = await myConnection.getEvents.addUser(data);
    return addU.recordsets;
  } catch (error) {
    console.log(error);
  }
}


module.exports = { getOrders: getOrders, setData: setData, setNewUser:setNewUser};
