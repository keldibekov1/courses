import { DataTypes } from "sequelize";
import database from "../config/db.js";

const Lesson = database.define("lesson", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Course,
            key: "id"
        }
    },
    desciription: {
        type: DataTypes.STRING
    }
})

Course.hasMany(Lesson, { foreignKey: "courseId", onDelete: "CASCADE" });
Lesson.belongsTo(Course, { foreignKey: "courseId" });

export default Lesson