import express from "express";
import database from "./config/db.js";

import authRouter from "./routes/auth.js";
import setupSwagger from "./config/swagger.js";

import mainRoute from "./routes/index.js";
e

let PORT = process.env.PORT || 4000;
let app = express();

app.use(express.json());


app.use("/auth", authRouter);




setupSwagger(app);

app.use("/api", mainRoute)


async function bootstaprt() {
  try {
    await database.sync();
    console.log("Connect to db");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
bootstaprt();
