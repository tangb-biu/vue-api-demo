'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotMiddleware = require('webpack-hot-middleware');
const InlineManifestWebpack = require('inline-manifest-webpack-plugin');

module.exports = (env) => {
	return {
		context: `${__dirname}/src`,
		entry: {
			app: './app.js',
			vendor: ['../lib/vue', '../lib/vuex', '../lib/vue-router']
		},
		output: {
			path: `${__dirname}/asserts`,
			filename: '[name].bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [
				// {
				// 	test: /\.(js|vue)$/,
				// 	loader: 'eslint-loader',
				// 	enforce: 'pre',
				// 	include: [path.join(__dirname, 'src'), path.join(__dirname, 'dist')],
				// 	options: {
				// 		formatter: require('eslint-friendly-formatter')
				// 	}
				// },
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use:['babel-loader']
				},
				{
					test: /\.(svg|jpe?g|gif|ttf|woff2?)$/,
					use: {
						loader: 'url-loader',
						options: {
							name: '[name]-[hash:8].[ext]'
						}
					}
				},
				{
					test: /\.html$/,
					use: {
						loader: 'html-loader',
					}
				},
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: ExtractTextPlugin.extract({
						use: 'css-loader'
					})
					/*
					[
						{ 
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								module: true,
								localIdentName: '[local]'
							}
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'expanded',
								sourceMap: true,
								includePaths: [`${__dirname}/src`]
							}
						}
					]
					*/
				}
			]
		},
		plugins: [
			// 提取样式文件
			new ExtractTextPlugin('styles.css'),

			// 提取第三方库 + 提取公共代码
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),

			new webpack.optimize.CommonsChunkPlugin({
				name: 'common',
				minChunks: 2
			}),
			// 生成对应入口文件的hash文件名
			//new ManifestPlugin(),

			new WebpackChunkHash(),

			new ChunkManifestPlugin({
				//filename: 'chunk-manifest.json',
				manifestVariable: 'webpackManifest'
			}),
			// 构造index.html 文件
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: '../index.html',
      			inject: true
			}),
			// 将js插入到html中
			new InlineManifestWebpack({
				name: 'webpackManifest'
			}),
			
			// 代码压缩
			/*
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true
			})
			*/
			//new webpack.HotModuleReplacementPlugin(),
		],
		devServer: {
			contentBase: `${__dirname}/asserts`,
			historyApiFallback: true,
			port: '8088',
			host: 'localhost',
		}
	}
}