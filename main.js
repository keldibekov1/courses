import express from "express";
import database from "./config/db.js";
import mainRoute from "./routes/index.js";

let PORT = process.env.PORT || 4000;
let app = express();

app.use(express.json());

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
