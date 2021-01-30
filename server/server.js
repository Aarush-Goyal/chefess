import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import keys from "./config/keys.js";
// routes import
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

const app = express();

// routes

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = keys.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("useFindAndModify", false);
