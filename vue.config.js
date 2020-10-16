const path = require("path");

module.exports = {
    filenameHashing: false,
    outputDir: path.resolve(__dirname, "./docs/.vuepress/dist/assets/"),
    runtimeCompiler: true,
    configureWebpack: (config) => {
        config.devtool = 'source-map';
    },
    css: {
        extract: {
            filename: 'bytepath.css',
            chunkFilename: 'bytepath.css',
        },
    },
};
