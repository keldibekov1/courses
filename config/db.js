import { Sequelize } from "sequelize";

const database = new Sequelize("n16", "root", "1212", {
  host: "localhost",
<<<<<<< HEAD
  password: "5779",
  username: "root",
  dialect: "mysql",
  logging: false
=======
  dialect: "mysql", 
>>>>>>> 9d08153398c36d5991d63daf311cd34a1dbbfb23
});

export default database;
