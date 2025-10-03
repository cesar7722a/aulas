import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", routes);

app.get("/", (_, res) => {
  res.send("O server esta fine e na porta 3333");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("O server está rodar na porta:3333");
});
