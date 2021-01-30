import express from "express";

import { getAuthGoogle, getAuthGoogleCallback } from "../controllers/auth.js";

const router = express.Router();

router.get("/google", getAuthGoogle);

router.get("/google/callback", getAuthGoogleCallback, (req, res) => {
  res.redirect("/profile");
});
export default router;
