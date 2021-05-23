const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "boswuj5cru2lg1phuwrod0cam";

const GenerateAccessToken = (user) => {
  const payload = {
    id_usuario: user.id_usuario,
    usuario: user.usuario,
    nombre: user.nombre,
    apellido_p: user.apellido_p,
    apellido_m: user.apellido_m,
    tipo_usuario: user.tipo_usuario,
    fecha_alta: user.fecha_alta,
    estado: user.estado,
    fecha_baja: user.fecha_baja,
    email: user.email,
  };
  return jwt.encode(payload, SECRET_KEY);
};

const GenerateRefreshToken = (user) => {
  const payload = {
    id_usuario: user.id_usuario,
    exp: moment().add(30, "days").unix(),
  };
  return jwt.encode(payload, SECRET_KEY);
};

const decodeToken = (token) => {
  return jwt.decode(token, SECRET_KEY, true);
};

module.exports = {
  GenerateRefreshToken,
  GenerateAccessToken,
  decodeToken,
};
