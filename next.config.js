const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = withTypescript({
  resolve: { root: [ path.resolve('./src') ] },
  webpack(config, options) {
    config.plugins = config.plugins || [];

    if (options.isServer) {
      config.plugins = [
        ...config.plugins,
        
        // type check
        new ForkTsCheckerWebpackPlugin(
          { tsconfig: '../tsconfig.json' }
        )
      ]
    }

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config;
  }
});
