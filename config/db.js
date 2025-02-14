import { Sequelize } from "sequelize";

let database = new Sequelize({
  database: "n16",
  host: "localhost",
  password: "1212",
  username: "root",
  dialect: "mysql",
});

export default database;
