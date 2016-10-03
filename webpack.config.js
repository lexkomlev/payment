'use strict';

const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: [
		'./src/app.jsx'
	],

	target: 'web',

	output: {
		path: path.join(__dirname, './dist/'),
		filename: '[name].js',
		publicPath: '/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: path.join(__dirname, './src'),
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				include: path.join(__dirname, './src')
			},
			{
				test: /\.svg$/,
				loader: 'svg-url'
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "url"
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.less', '.json'],
		modulesDirectories: ['node_modules']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
	],

	devtool: '#inline-source-map'
};
