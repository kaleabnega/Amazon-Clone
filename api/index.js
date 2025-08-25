const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseFloat(req.query.total);

  if (total > 0) {
    // console.log("Payment received: " + total);
    // res.send(total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "Total must be greater than 0",
    });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error occurred: " + err);
  } else {
    console.log(`Listening to port ${port}`);
  }
});
