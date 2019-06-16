const path = require("path");
module.exports = {
  mode:'development',
  entry:'./a.js',
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:'boundle.js',
  },
  module:{
    rules:[
        {
          test:/\.css/,
          exclude:'/node_modules/',
          use:['css-load']
        }
    ]
  },
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    port:8080,
    host:"127.0.0.1",
    compress:true
  },
  // plugins:{}
}
