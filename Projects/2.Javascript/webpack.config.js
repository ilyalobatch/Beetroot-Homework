const path = require("path");

module.exports = {
  entry: {
    main: ["./assets/js/main.js", "./assets/scss/index.scss"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "./", name: "[name].css" },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
