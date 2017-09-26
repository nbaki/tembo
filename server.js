const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const path = require('path');

const WWW_DIR = path.join(__dirname, "www"),
      SRC_DIR = path.join(__dirname, "src"),
      PORT = 3000;

const compiler = webpack(webpackConfig);
 
app.use(express.static(WWW_DIR));
 
app.get("*", function (req, res) {  
    res.sendFile(path.join(WWW_DIR, "index.html"));
});

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));
 
const server = app.listen(PORT, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })