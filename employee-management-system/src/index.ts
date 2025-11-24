import express from "express";
import cors from "cors";
import routes from "./routes/index";

const app = express();

app.use(cors());

app.use(express.json());
app.use("v1", routes);

app.listen(5000, () => {
  console.log("Servidor a correr na porta 5000");
});
