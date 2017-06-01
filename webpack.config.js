

module.exports = {
    entry: {
        index: './less/index.less'
    },
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg|woff(2)?|eot|ttf)$/,
            loader: "url-loader?limit=9000"
        }]
    },
}