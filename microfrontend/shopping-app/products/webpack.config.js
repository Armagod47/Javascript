const HtmlWebpackPlugin = require("html-webpack-plugin");
// To use product mfe in Shopping App
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      // exposing products index.js file to shopping app
      // filename can be any name, remoteEntry is convention
      // './ProductIndex is key , it can be any name
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductIndex": "./src/index",
      },
    }),
  ],
};
