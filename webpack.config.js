const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //시작점. 여기서 호출하는 (사용하는) 모든 모듈을 압축하고 main.js로 만든다.
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test : /\.css$/, //$는 .css 파일인지를 판단
        use : ["style-loader" , "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};