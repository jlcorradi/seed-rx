const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const DIST = path.join(__dirname, '/dist')

module.exports = {
	entry: './src/index.js',
	output: {
		path: DIST,
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: { loader: 'babel-loader' } },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(ttf|eot|svg|woff|woff(2)|jpg|jpeg|ico|bmp|png)$/, use: ['file-loader'] }
		]
	},
	resolve: { extensions: ['.js', '.jsx'] },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
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
