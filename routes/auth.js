import express from "express";

import {
  getAuthGoogle,
  getAuthGoogleCallback,
  getGoogleLogout,
} from "../controllers/auth.js";

const router = express.Router();

router.get("/google", getAuthGoogle);

router.get("/google/callback", getAuthGoogleCallback, (req, res) => {
  res.redirect("/dashboard");
});

router.get("/logout", getGoogleLogout);
export default router;
