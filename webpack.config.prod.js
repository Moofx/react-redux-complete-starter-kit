import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    entry: path.resolve(__dirname, 'src/index'),
    target: 'web',
    output: {
        path: __dirname + '/www', // Note: Physical files are only output by the production build task `npm run build`.
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?sourceMap")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css!sass?sourceMap"])
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};
