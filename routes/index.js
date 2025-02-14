import { Router } from "express";
import CommentRoute from "./comment.routes.js";
import LessonRoute from "./lesson.routes.js";

let mainRoute = Router()

mainRoute.use("/comment", CommentRoute)
mainRoute.use("/lesson", LessonRoute)

export default mainRoute;