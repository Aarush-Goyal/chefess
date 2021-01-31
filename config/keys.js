import prodKeys from "./prod.js";
import devKeys from "./dev.js";
let keys;
process.env.NODE_ENV === "production" ? (keys = prodKeys) : (keys = devKeys);

export default keys;
