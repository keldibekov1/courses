import { Router } from "express";
import { create, findAll, findBySearch, findOne, remove, update } from "../controllers.controller.js";


const courseRoute = Router();

courseRoute.get("/all", findAll);
courseRoute.get("/:id", findOne);
courseRoute.get("/:query", findBySearch);
courseRoute.post("/", create);
courseRoute.patch("/:id", update);
courseRoute.delete("/:id", remove);

export default courseRoute;