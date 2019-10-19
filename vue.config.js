module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/vault': {
                target: 'http://localhost:3000'
            }
        }
    }
}