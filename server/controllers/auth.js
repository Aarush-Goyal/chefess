import passport from "passport";
import Google from "passport-google-oauth20";
import keys from "../config/keys.js";
const GoogleStrategy = Google.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.authCallback,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(done);
    }
  )
);

export const getAuthGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const getAuthGoogleCallback = passport.authenticate("google");
