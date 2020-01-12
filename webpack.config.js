const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;

module.exports = {
    entry: ["./src/index.tsx"],
    module: {
        rules: [
            {
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
            },
            {
				test: /\.(ttf|eot|woff)(\?v=[0-9].[0-9].[0-9])?$/,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
            },
            
        ]
    },
    resolve: {
		extensions: [".tsx", ".ts", ".js", ".json"],
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.[hash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(NODE_ENV),
			"process.env.PORT": JSON.stringify(PORT)
		})
	],
	devServer: {
		contentBase: './dist',
		compress: true,
		port: PORT,
		hot: true, //HotModuleReplacement
		// https: true, //Enable SSL
	  }
}