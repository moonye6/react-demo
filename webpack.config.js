var path=require('path');
module.exports = {
  entry: {
    main: ['webpack-dev-server/client?http://127.0.0.1:80','webpack/hot/dev-server','./App/main']
  },
  output: {
    filename: './public/main.js'       
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, "App")],
      loader: 'react-hot!jsx-loader?harmony'
    }]
  }
};