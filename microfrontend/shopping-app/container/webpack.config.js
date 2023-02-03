const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3003,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // key : 'value' , value = name's value from product webconfig file@http.....
        products: "products@http://localhost:3001/remoteEntry.js",
        carts: "cart@http://localhost:3002/remoteEntry.js",
      },
    }),
  ],
};
