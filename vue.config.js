var webpack = require('webpack');

module.exports = {
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {}
        })
    ]
}