import { Router } from "express";
import Restaurant from "../models/Restaurant";

const router = Router();

// Listar restaurantes (com filtro por cidade)
router.get("/", async (req, res) => {
  const { city } = req.query;
  const filter: any = { isActive: true };
  if (city) filter.city = city;

  const restaurants = await Restaurant.find(filter);
  res.json(restaurants);
});

// Criar restaurante
router.post("/", async (req, res) => {
  const restaurant = new Restaurant(req.body);
  await restaurant.save();
  res.status(201).json(restaurant);
});

// Atualizar restaurante
router.put("/:id", async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(restaurant);
});

// Remover restaurante
router.delete("/:id", async (req, res) => {
  await Restaurant.findByIdAndDelete(req.params.id);
  res.json({ message: "Restaurante removido" });
});

export default router;
