const routesFunc = require("next-routes");

module.exports = routesFunc()
  .add("index")
  .add("login")
  .add("artist", "/artists/:id")
  .add("album", "/albums/:id")
  .add("playlist", "/playlists/:id");
