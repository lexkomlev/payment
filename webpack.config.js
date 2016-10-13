'use strict';

const path = require('path');
const webpack = require('webpack');

const includedDirectories = [
	path.join(__dirname, 'src'),
	path.join(__dirname, 'components')
];


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
				include: includedDirectories
			},
			// {
			// 	test: /\.tsx?$/,
			// 	loader: 'babel!ts',
			// 	include: path.join(__dirname, 'node_modules')
			// },
			{
				test: /\.css$/,
				loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[folder]__[local]__[hash:base64:5]',
				include: includedDirectories

			},
			{
				test: /\.less$/,
				loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[folder]__[local]__[hash:base64:5]!less',
				include: includedDirectories

			},
			{
				test: /\.svg$/,
				loader: 'svg-url',
				include: includedDirectories

			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "url",
				include: includedDirectories

			},
			{
				test: /\.json$/,
				loader: 'json',
				include: includedDirectories

			}
		]
	},

	resolve: {
		root: path.resolve('./'),
		extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.json'],
		modulesDirectories: ['node_modules', 'components', 'styles']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
	],

	devtool: '#inline-source-map'
};
