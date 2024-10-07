import express from "express";
import router from express.Router();
import stripe from "stripe";
import stripe from "your-stripe-secret-key";

router.post('/', async (req, res) => {
  const { paymentMethodId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000, 
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
