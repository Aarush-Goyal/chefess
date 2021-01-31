import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import keys from "./config/keys.js";
import passport from "passport";
import cookieSession from "cookie-session";
import path from "path";
// models and controllers
import "./models/Users.js";
import "./controllers/auth.js";

// routes import
import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";

const app = express();

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: keys.cookieKey }));

app.use(passport.initialize());
app.use(passport.session());

// routes

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = keys.CONNECTION_URL;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected DB");
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose.set("useFindAndModify", false);

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
