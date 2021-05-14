//Controllers/user.js
const dboperations = require("../dboperations");
const bycrypt = require("bcrypt-nodejs");

const SignUp = async(req, res) => {
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
  } =req.body;

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
        bycrypt.hash(clave, null, null, function (err, hash) {
          if (err) {
            res
              .status(500)
              .send({ message: "Error al encriptar la contraseña" });
          } else {
            data.clave = hash;
            data.email = data.email.toLowerCase();

              try { 
                  dboperations.setData(data).then((result) => {    
                      res.status(201).send({message: "Datos agregados", resultado: result});
              });
            }catch(e){
                console.log(e);
            }
          }
        });
      }
    }
  }
};

module.exports = {
  SignUp,
};
