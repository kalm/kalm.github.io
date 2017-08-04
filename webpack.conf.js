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
    	},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[name].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    	}
			]
    }
};
