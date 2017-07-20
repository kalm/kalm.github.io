const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './public',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true
	}
};
