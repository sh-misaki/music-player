const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = withTypescript({
  resolve: { root: [ path.resolve('./src') ] },
  webpack(config, options) {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin(
      { tsconfig: '../tsconfig.json' }
    ))
    return config
  }
});
