const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
    	}
		]
	},
	devServer: {
		contentBase: './public',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
