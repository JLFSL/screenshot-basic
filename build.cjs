// Build sequentially in one process. Do not launch this legacy webpack through
// node -e: worker-farm inherits execArgv, which can recursively rerun an eval.
const webpack = require('webpack');
function build(name) {
    return new Promise((resolve, reject) => {
        webpack({ ...require('./' + name + '.config.js'), mode: 'production',
            optimization: { minimize: false } }, (error, stats) => {
            if (error) return reject(error);
            if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
            console.log('Built screenshot-basic ' + name);
            resolve();
        });
    });
}
(async () => {
    for (const name of ['client', 'server', 'ui']) await build(name);
})().catch(error => { console.error(error.message); process.exitCode = 1; });
