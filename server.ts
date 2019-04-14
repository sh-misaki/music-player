// server.js
const next = require("next");
const routes = require("./routes.ts");
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./src",
});
const handler = routes.getRequestHandler(app);

// Without express
const { createServer } = require("http");
app.prepare().then(() => {
  createServer(handler).listen(3000);
});
