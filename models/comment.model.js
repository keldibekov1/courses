import { DataTypes } from "sequelize";
import database from "../config/db.js";
import Course from "./course.model.js";

const Comment = database.define("Comment", {
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "User",
            key: "id"
        }
    },
    desciription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    star: {
        type: DataTypes.INTEGER,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: "id"
        }
    },
   
} , {timestamps: true})

User.hasMany(Comment, { foreignKey: "authorId", onDelete: "CASCADE" });
Comment.belongsTo(Course, { foreignKey: "authorId" });
Course.hasMany(Comment, { foreignKey: "courseId", onDelete: "CASCADE" });
Comment.belongsTo(Course, { foreignKey: "courseId" });


export default Comment;