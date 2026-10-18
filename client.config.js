module.exports = {
    // Keep the legacy minifier from starting a worker farm on modern Node.
    optimization: { minimize: false },
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
	output: {
		filename: 'client.js',
		path: __dirname + '/dist/'
    },
    node: {
        fs: 'empty'
    }
};
