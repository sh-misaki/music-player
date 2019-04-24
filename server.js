const next = require("next");
const routes = require("./routes.ts");
const express = require("express");
const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./src"
});
const handler = routes.getRequestHandler(app);
const url = require("url");

// 認証パスの作成
const unauthPaths = ["/", "/login"];
const authRoutes = routes.routes.filter((route) => {
  return unauthPaths.indexOf(route.page) === -1;
});
const authPaths = [];
authRoutes.map((route) => {
  authPaths.push(route.page);
  authPaths.push(route.regex);
});

app
  .prepare()
  .then(() => {
    const app = express();

    app.get(authPaths, (req, res, next) => {
      const isTokenGot = !!req.headers.cookie && !!req.headers.cookie.split("; ").filter((query) => {
        return !!query.match("token=");
      })[0];
      const urlObj = url.parse(req.url)

      if (!isTokenGot) {
        res.redirect("/login");
      }

      next();
    });

    app.use(handler).listen(3000);
  })
  .catch(() => {
    process.exit(1);
  });
