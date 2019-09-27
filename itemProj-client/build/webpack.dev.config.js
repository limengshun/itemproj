const path = require("path");
const entry = require("./entry.config");
const rules = require("./loader.config");
const plugins = require("./plugin.config");

module.exports = {
    context: path.resolve(__dirname, "../"),
    mode: "development",
    entry,
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "static/js/[name]-[hash:5].js",
        publicPath: "http://10.2.2.151:8081/"
    },
    module: { rules },
    plugins,
    devServer: {
        contentBase: path.resolve(__dirname, "../dist/"),
        host: "10.2.2.151",
        port: 8081,
        open: true,
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            "main-less": path.resolve(__dirname, './src/less/index.less')
        }
    }
}