const { StringDecoder } = require("string_decoder");
const User = require("../models/user");
const decoder = new StringDecoder("utf8");

const setUserData = (data) => {
  var password = decoder.write(data[0][0].clave);
  password = password.substring(0, (password.length - 4));
  const user = new User(
    data[0][0].id_usuario,
    data[0][0].usuario,
    data[0][0].nombre,
    data[0][0].apellido_p,
    data[0][0].apellido_m,
    data[0][0].tipo_usuario,
    data[0][0].fecha_alta,
    data[0][0].estado,
    data[0][0].fecha_baja,
    password,
    data[0][0].email
  );
  return user;
};

const setRegisterData = (data) => {
  const existente = data[0][0];
  return existente;
};

module.exports = { setUserData, setRegisterData };
