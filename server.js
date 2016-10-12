const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');


// add HMR stuff
config.entry = [
	'webpack-dev-server/client?http://0.0.0.0:8080',
	'webpack/hot/only-dev-server'
].concat(config.entry);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// launch server
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './src'
}).listen(8080, '0.0.0.0', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.green('Listening at http://0.0.0.0:8080/'));
});
