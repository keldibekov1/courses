import { DataTypes } from "sequelize";
import database from "../config/db.js";

const Course= database.define(
    "course",
    {
      name: {
        type: DataTypes.STRING,
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export default Course;