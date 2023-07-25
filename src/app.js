import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Database connection error"));
db.once("open", () => {
  console.log("db connection was successful.");
});

const app = express(); //Instancio o app chamando o express
app.use(express.json());
routes(app);

export default app;
