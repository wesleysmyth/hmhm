const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
process.noDeprecation = true;

var config = {
    entry: path.resolve(__dirname, "./src/js/app.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".json" ]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    "presets": [ "es2015", "react", "stage-1" ],
                    "plugins": [ "transform-decorators-legacy" ]
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            hash: "sha512",
                            digest: "hex",
                            name: "[hash].[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            optipng: {
                                optimizationLevel: true
                            },
                            gifsicle: {
                                interlaced: true
                            }
                        }
                    },
                ]
            },
        ]
    },
    externals: {
        "cheerio": "window",
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Half Man Half Machine",
            template: "./src/html/index.html"
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname),
        port: 3000,
        https: false
    }
};

// if (process.env.NODE_ENV === "production") {
//     config.plugins.push(
//         new UglifyJSPlugin()
//     );
// }

if (process.env.DEVTOOLS_ENABLED) {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                DEVTOOLS_ENABLED: true
            }
        })
    );
}

module.exports = config;
