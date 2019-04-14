const routesFunc = require("next-routes");

module.exports = routesFunc()
  .add("index")
  .add("login")
  .add("artistsShow", "/artists/:id")
  .add("albumsShow", "/albums/:id");
