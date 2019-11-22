module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/vault': {
                target: 'http://vault.sasuga.link',
                pathRewrite: {
                    '^/vault': ''
                }
            }
        }
    }
}