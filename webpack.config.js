const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader"
            //下から読み込まれる
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
