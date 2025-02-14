import { Router } from "express";
import { create, findAll, findBySearch, findOne, remove, update } from "../controllers/course.controller.js";
import selfPolice from "../middlewares/selfPolice.js";
import verifyToken from "../middlewares/verifyToken.js";



const courseRoute = Router();

courseRoute.get("/all", findAll);
courseRoute.get("/:id", findOne);
courseRoute.get("/:query", findBySearch);
courseRoute.post("/",verifyToken, selfPolice,create);
courseRoute.patch("/:id", update);
courseRoute.delete("/:id", remove);

export default courseRoute; 