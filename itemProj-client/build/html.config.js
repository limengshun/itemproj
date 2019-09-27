const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/detail.html",
        filename: "static/pages/detail.html",
        chunks: ["detail"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/shopping-cart.html",
        filename: "static/pages/shopping-cart.html",
        chunks: ["shoppingCar"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/login-register.html",
        filename: "static/pages/login-register.html",
        chunks: ["loginRegister"]
    })
]