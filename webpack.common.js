const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Calculator',
      filename: 'index.html',
      template: "src/template.html"
    }),
  ]
}