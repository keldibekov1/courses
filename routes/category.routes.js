import { Router } from "express";
import { create, findAll, findBySearch, findOne, remove, update } from "../controllers.controller.js";


const categoryRoute = Router();

categoryRoute.get("/all", findAll);
categoryRoute.get("/:id", findOne);
categoryRoute.get("/:query", findBySearch);
categoryRoute.post("/", create);
categoryRoute.patch("/:id", update);
categoryRoute.delete("/:id", remove);

export default categoryRoute;