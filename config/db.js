import { Sequelize } from "sequelize";

let database = new Sequelize({
  database: "group",
  host: "localhost",
  password: "12345678",
  username: "root",
  dialect: "mysql",
  logging: false
});

export default database;
