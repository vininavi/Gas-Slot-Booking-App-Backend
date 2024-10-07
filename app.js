import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "auth.js";
import providerRouter from "provider.js";
import bookingRouter from "booking.js";
import paymentRouter from "payment.js";
import config from "db.config.js";

const app = express();
app.use(cors({
  origin : "*"
}));
app.use(bodyParser.json());

mongoose.connect(config.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRouter);
app.use('/api/providers', providerRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/payment', paymentRouter);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
