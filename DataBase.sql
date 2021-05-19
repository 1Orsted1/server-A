create database Ayuntamiento_DB;

--SELECT * FROM dbo.usuarios

--SELECT * FROM dbo.usuarios where clave = 0x24326124313024504A686A38354349346674686D50476B597A4B526B4F4E4E47627A68715445375A307976302F7041776B415878772F35496C4D4C7500000000

use Ayuntamiento_DB;
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    id_usuario UNIQUEIDENTIFIER DEFAULT NEWID()
    ,usuario nvarchar(20) NOT NULL
    ,nombre NVARCHAR(20) NOT NULL
    ,apellido_p NVARCHAR(20) NOT NULL
    ,apellido_m NVARCHAR(20) NOT NULL
    ,tipo_usuario NVARCHAR(20) NOT NULL
    ,fecha_alta DATE NOT NULL
    ,estado BIT NOT NULL
    ,fecha_baja DATE
    ,clave BINARY(64) NOT NULL
    ,email NVARCHAR(30) NOT NULL
)

INSERT INTO usuarios (
  id_usuario,  usuario, nombre, apellido_p, apellido_m, tipo_usuario, fecha_alta,estado, fecha_baja, clave, email
)VALUES(default, 'testUserPleaseIgnore', 'testUserPleaseIgnore', 'testUserPleaseIgnore', 'testUserPleaseIgnore','admin', '2021-06-12', 0, '2021-06-13',HASHBYTES('SHA2_512', 'hello_Amigo'), 'miCorreoOtroCorreo@gmail.com'),
(default,  'testUserPleaseIgnore','testUserPleaseIgnore', 'testUserPleaseIgnore', 'testUserPleaseIgnore','admin', '2021-06-12', 0, '2021-06-13',HASHBYTES('SHA2_512', 'queOnda'), 'otrocorreoGenerico@gmail.com')
