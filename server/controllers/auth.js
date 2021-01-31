import mongoose from "mongoose";
const User = mongoose.model("users");
import passport from "passport";
import Google from "passport-google-oauth20";
import keys from "../config/keys.js";
const GoogleStrategy = Google.Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.authCallback,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

export const getAuthGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const getAuthGoogleCallback = passport.authenticate("google");

export const getGoogleLogout = (req, res) => {
  req.logout();
  res.send(req.user);
};
