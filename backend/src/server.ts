import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurants";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/restaurants", restaurantRoutes);

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/mapa-gastronomico")
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
  })
  .catch((err) => console.error(err));
