import { resolve as _resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import dotEnv from "dotenv-webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export const entry = {
  main: _resolve(__dirname, "./src/index.tsx"),
};
export const output = {
  path: _resolve(__dirname, "./dist"),
  filename: "[name].bundle.js",
  publicPath: "/",
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      type: "asset/resource",
    },
    {
      test: /\.(png|jpeg)/,
      type: "asset/resource",
    },
  ],
};
export const resolve = {
  extensions: ["*", ".js", ".jsx", ".css", ".tsx", ".ts"],
  alias: {
    "@css": _resolve(__dirname, "src/css"),
    "@components": _resolve(__dirname, "src/components"),
    "@assets": _resolve(__dirname, "src/assets"),
    "@src": _resolve(__dirname, "src"),
  },
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: "webpack Boilerplate",
    template: _resolve(__dirname, "./src/index.html"),
    filename: "index.html",
  }),
  new CleanWebpackPlugin(),
  new dotEnv(),
  new TsconfigPathsPlugin(),
];
export const mode = process.env.NODE_ENV === "production" ? "production" : "development";
export const devServer = {
  historyApiFallback: true,
};
