//"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_VERSION,
  COOKIE_ENCRYPT_PWD,
  SQL_USER,
  SQL_SERVER,
  SQL_DATABASE,
  SQL_PASSWORD,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_DATABASE, "SQL_DATABASE is required");
assert(SQL_PASSWORD, "SQL_PASSWORD is required");


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    apiVerion: API_VERSION,
    cookiePwd: COOKIE_ENCRYPT_PWD,
    sql:{
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options:{
            trustedconnection:true,
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
};

