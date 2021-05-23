//Controllers/user.js
const {
  GenerateRefreshToken,
  GenerateAccessToken,
} = require("../services/jwt");
const dboperations = require("../dboperations");
const bcrypt = require("bcrypt-nodejs");
const { setUserData, setRegisterData } = require("../util/userOperations");
const SignUp = (req, res) => {
  let data = { ...req.body };
  const {
    usuario,
    nombre,
    apellido_p,
    apellido_m,
    tipo_usuario,
    clave,
    repetir,
    email,
  } = req.body;

  // console.log(usuario, nombre, apellido_m, apellido_p, tipo_usuario, email);
  if (!clave || !repetir) {
    res.status(404).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (clave != repetir) {
      res.status(404).send({ message: "Las contraseñas no coinciden" });
    } else {
      if (
        !usuario ||
        !nombre ||
        !apellido_m ||
        !apellido_p ||
        !tipo_usuario ||
        !email
      ) {
        res.status(404).send({ message: "Todos los campos son obligatorias" });
      } else {
        bcrypt.hash(clave, null, null, function (err, hash) {
          if (err) {
            res
              .status(500)
              .send({ message: "Error al encriptar la contraseña" });
          } else {
            data.clave = hash;
            data.email = data.email.toLowerCase();
            try {
              dboperations.setNewUser(data).then((result) => {
                const newResult = setRegisterData(result);
                res.status(200).send({
                  resultado: {
                    user: "ok",
                    existe: newResult,
                  },
                });
              });
            } catch (e) {
              console.log(e);
            }
          }
        });
      }
    }
  }
};

const signIn = (req, res) => {
  const params = req.body;
  const password = params.clave;
  try {
    dboperations.searchUser(params.usuario).then((result) => {
      if (result[0][0] === undefined) {
        res.status(404).send({
          resultado: { user: "ok", message: "Usuario no registrado" },
        });
      } else {
        const userData = setUserData(result);
        bcrypt.compare(password, userData.clave, (err, check) => {
          if (err) {
            res
              .status(500)
              .send({ resultado: { message: "Error en el servidor" } });
          } else {
            if (check) {
              if (!userData.estado) {
                res.status(200).send({
                  resultado: {
                    user: "ok",
                    message: "El usuario no esta activado",
                  },
                });
              } else {
                res.status(200).send({
                  resultado: {
                    accessToken: GenerateAccessToken(userData),
                    refreshToken: GenerateRefreshToken(userData),
                  },
                });
              }
            } else {
              res.status(200).send({
                resultado: {
                  user: "ok",
                  message: "Contraseña incorrecta",
                },
              });
            }
          }
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  SignUp,
  signIn,
};
