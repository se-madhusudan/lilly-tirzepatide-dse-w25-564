const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const PreCopyPlugin = require('copy-webpack-plugin');
const CopyPlugin = require('webpack-copy-on-build-plugin');
const baseUrlSlug = process.env.DEVELOPMENT_SUBFOLDER ? process.env.DEVELOPMENT_SUBFOLDER : '/';
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const addApacheConfig = indexFolder => {
	let routes = [];

	var fromTos = [];
	var fromTosPre = [];

	routes.forEach(r => {
		fromTos.push({
			from: 'dist/index.html',
			to: 'dist/' + r + 'index.html'
		});
		fromTosPre.push({
			from: 'public/.htaccess',
			to: r
		});
	});

	if (process.env.NODE_ENV !== 'development') {
		return {
			plugins: [
				new ReplaceInFileWebpackPlugin([
					{
						dir: 'dist',
						files: [ '.htaccess' ],
						rules: [
							{
								search: /RewriteBase \//g,
								replace: `RewriteBase ${indexFolder}`
							}
						]
					}
				]), new PreCopyPlugin(fromTosPre), new CopyPlugin(fromTos), new ImageminPlugin({
					test: /\.(jpe?g|png|gif)$/i,
					pngquant: {
						quality: '90'
					},
					plugins: [
						imageminMozjpeg({
							quality: 80
						})
					]
				})
			]
		};
	} else if (indexFolder !== '/') {
		return {
			plugins: [
				new ReplaceInFileWebpackPlugin([
					{
						dir: 'dist',
						files: [ '.htaccess' ],
						rules: [
							{
								search: /RewriteBase \//g,
								replace: `RewriteBase ${indexFolder}`
							}
						]
					}
				]), new ImageminPlugin({
					test: /\.(jpe?g|png|gif|svg)$/i,
					pngquant: {
						quality: '90'
					},
					plugins: [
						imageminMozjpeg({
							quality: 80
						})
					]
				})
			]
		};
	} else {
		return {};
	}
};

module.exports = {
	configureWebpack: addApacheConfig(baseUrlSlug),
	publicPath: baseUrlSlug,
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/Styles/Helpers/_variables";
					   @import "@/Styles/Mixins/_mixins";`
			}
		}
	},
	filenameHashing: true,
	chainWebpack: config => {
		config.module
		  .rule("pdf")
		  .test(/\.pdf$/)
		  .use("file-loader")
		  .loader("file-loader");

		config.plugin('html').tap((args) => {
			args[0].minify = {
			  ...args[0].minify,
			  removeAttributeQuotes: false
			}
			return args
		})
	},
};
