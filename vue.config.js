const path = require("path");

module.exports = {
    filenameHashing: false,
    outputDir: path.resolve(__dirname, "./docs/themes/vue/source/compiled/"),
    runtimeCompiler: true,
    configureWebpack: (config) => {
        config.devtool = 'source-map'
    },
};
