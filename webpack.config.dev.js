import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/www', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    sasslint: {
        configFile: '.sass-lint.yml',
        failOnWarning: true
    },
    module: {
        preLoaders: [
            {
                test: /\.s[a|c]ss$/,
                loader: 'sasslint'
            }
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.s[a|c]ss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(jpg|jpeg|png)$/,
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
    },
    stats: {
        children: false
    }
};
