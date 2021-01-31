import dotenv from "dotenv";
dotenv.config();

const prodKeys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authCallback: process.env.GOOGLE_AUTH_CALLBACK,
  CONNECTION_URL: process.env.CONNECTION_URL,
  cookieKey: [process.env.COOKIE_KEY],
};

export default prodKeys;
