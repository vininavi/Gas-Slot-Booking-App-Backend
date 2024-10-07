import express from "express";
import router from express.Router();
import providerRouter from "provider.js";

router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
