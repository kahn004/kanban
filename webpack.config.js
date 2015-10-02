var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
	entry: path.resolve(ROOT_PATH, 'app'),
	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: path.resolve(ROOT_PATH, 'app')
			}
		]
	}
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
		    historyApiFallback: true,
		    hot: true,
		    inline: true,
		    progress: true,
		    port: 4000
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlwebpackPlugin({
				title: 'Kanban app'
			})
		]
	});
}