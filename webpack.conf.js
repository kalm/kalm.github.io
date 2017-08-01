const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'out/bundle.js',
	},
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
    }
};
