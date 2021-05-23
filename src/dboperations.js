var config = require("./config");
const getConnection = require("./data/index");

//En este se obitnen la informacion respuesta de los query
async function getOrders() {
  try {
    const myConnection = await getConnection(config.sql);
    const users = await myConnection.getEvents.getUsers();
    return users.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function setData(data) {
  try {
    const myConnection = await getConnection(config.sql);
    const addU = await myConnection.getEvents.setUser(data);
    return addU.recordsets;
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

async function searchUser(user) {
  try {
    const myConnection = await getConnection(config.sql);
    const addU = await myConnection.getEvents.searchUser(user);
    return addU.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrders: getOrders,
  setData: setData,
  setNewUser: setNewUser,
  searchUser: searchUser,
};
