import webpack from "webpack";
import path from "path";
import fs from "fs";
import HtmlWebPackPlugin from "html-webpack-plugin";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appNodeModules = resolveApp("node_modules");

module.exports = {
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
    },
    entry: [
        path.resolve(__dirname, "src", "index"),
    ],
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "assets/[name].js",
        libraryTarget: "umd",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
            {
                test: /\.(mp4)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/video",
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: path.resolve(__dirname, "output", "public", "fonts"),
                            publicPath: path.resolve(__dirname, "output", "public", "fonts"),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "index.html"),
            filename: "index.html",
        }),
    ],
    resolve: {
        modules: [appNodeModules],
        extensions: [".js", ".jsx"],
    },
};
