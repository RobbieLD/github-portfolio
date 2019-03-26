module.exports = {
    chainWebpack: config => {
        config.plugin('copy').tap((args) => [[{
            from: 'public/',
            to: '.',
            toType: 'dir',
            ignore: [
                'config.json.sample',
            ],
        }]]
        );
    },
}