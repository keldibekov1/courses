import { Router } from "express";
import { FindAll } from "../controllers/comment.controller.js";

let CommentRoute = Router()

CommentRoute.get("/all", FindAll)


export default CommentRoute