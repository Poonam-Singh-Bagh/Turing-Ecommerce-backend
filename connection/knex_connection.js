const env = require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database,
  },
  // connection: {
  //   host: "localhost",
  //   user: "root",
  //   password: "Crazypooh@1379",
  //   database: "Turing",
  // },
});

module.exports = knex;

// console.log("knex", knex.client);
