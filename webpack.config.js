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
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			},
			{
				test: /\.css$/,
				loader: 'style!css',
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			},
			{
				test: /\.svg$/,
				loader: 'svg-url',
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "url",
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			},
			{
				test: /\.json$/,
				loader: 'json',
				include: [path.join(__dirname, './src'), path.join(__dirname, './components')]
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.less', '.json'],
		modulesDirectories: ['node_modules', 'components']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
	],

	devtool: '#inline-source-map'
};
