module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      { test : /\.vue$/, loader : 'vue'}
    ]
  }
}