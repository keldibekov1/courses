import { Sequelize } from "sequelize";

let database = new Sequelize({
  database: "group",
  host: "localhost",
  password: "5779",
  username: "root",
  dialect: "mysql",
  logging: false
});

export default database;
