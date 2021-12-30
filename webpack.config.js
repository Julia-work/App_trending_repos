const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const getStyleLoaders = () => {
  return [isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"];
};

const getPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: "Hello World",
      buildTime: new Date().toISOString(),
      template: "./public/index.html",
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "main-[hash:8].css",
      })
    );
  }
  return plugins;
};

module.exports = () => {
  return {
    mode: isProd ? "production" : isDev && "development",

    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
    },
    devServer: {
      historyApiFallback: true,
      static: './',
      port: 8080,
      hot: isDev,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          use: [
            // loading images
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]",
              },
            },
          ],
        },
        // loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
        // loading css
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },
        // loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },

    plugins: getPlugins(),
  };
};
