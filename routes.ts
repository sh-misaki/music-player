const routes = require("next-routes");

module.exports = routes()
  .add("index")
  .add("login")
  .add("artistsShow", "/artists/:id")
  .add("albumsShow", "/albums/:id");
