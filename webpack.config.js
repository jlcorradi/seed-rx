const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const DIST = path.join(__dirname, '/dist')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: DIST,
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: { loader: 'babel-loader' } },
			{ test: /\.(ttf|eot|svg|woff|woff(2)|jpg|jpeg|ico|bmp|png)$/, use: ['file-loader'] },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				})
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	resolve: { extensions: ['.js', '.jsx'] },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/index.html')
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin('style.css')
	],
	devServer: {
		port: 4300,
		contentBase: DIST,
		watchContentBase: true,
		watchOptions: {
			poll: true
		},
		proxy: [
			{
				context: ['/api'],
				target: 'http://localhost:9001',
				logLevel: 'debug'
			}
		]
	}
}
