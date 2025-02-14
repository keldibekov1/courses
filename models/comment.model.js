import { DataTypes } from "sequelize";
import database from "../config/db.js";

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
Comment.belongsTo(User, { foreignKey: "authorId" });

export default Comment;