const HtmlWebpackPlugin = require("html-webpack-plugin");
// To use product mfe in Shopping App
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      // exposing carts index.js file to shopping app
      // filename can be any name, remoteEntry is convention
      // './CartIndex is key , it can be any name
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index",
      },
    }),
  ],
};
