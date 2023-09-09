const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// TODO: set up webpack env definitions to select more specific build types

module.exports = (env, argv) => {
    const IS_PRODUCTION = argv.mode == "production";
    const exp = {
        mode: argv.mode, // --mode production/development
        entry: "./Frontend/src/index.ts",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: { sourceMap: IS_PRODUCTION },
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|eot|svg|ico|webp)(\?[a-z0-9=.]+)?$/,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[contenthash:8].[ext]",
                    },
                },
                {
                    test: /\.ttf$/i,
                    type: "asset/resource",
                    dependency: { not: ["url"] },
                },
                {
                    test: /\.[tj]sx?$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
            ],
        },
        devServer: {
            watchFiles: ["src/**.*"],
            hot: true,
            historyApiFallback: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Excessive Motion UI",
                filename: "index.html",
                template: "./Frontend/src/index.html",
                inject: "head",
                hash: true,
                minify: {
                    collapseWhitespace: true,
                },
            }),
            // new CopyPlugin({
            //     patterns: [
            //         { from: "./Frontend/src/static" },
            //     ],
            // }),
            new MiniCssExtractPlugin(),
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        entry: {
            main: path.resolve(__dirname, "./Frontend/src/index.ts"),
        },
        output: {
            path: path.resolve(__dirname, "./build/frontend/"),
            filename: IS_PRODUCTION ? "[name].[contenthash:8].js" : "main.js",
            clean: true, // clean dist folder before build
            assetModuleFilename: IS_PRODUCTION
                ? "[contenthash:16][ext][query]"
                : "assets/[name][ext][query]",
        },
        optimization: {
            mergeDuplicateChunks: IS_PRODUCTION,
            mangleExports: IS_PRODUCTION,
            minimize: IS_PRODUCTION,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            passes: 2,
                        },
                        keep_classnames: false,
                        keep_fnames: false,
                        toplevel: true,
                        mangle: {
                            properties: {
                                keep_quoted: true,
                            },
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
        },
        // "Disable" performance/size limits for now
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
    };

    return exp;
};
