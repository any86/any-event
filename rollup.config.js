// import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
export default {
    input: './src/main.ts',
    plugins: [typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript')
    })],
    output: [{
        format: 'es',
        file: 'index.js',
    }, {
        format: 'umd',
        name: 'miniEvents',
        file: 'dist/miniEvents.umd.js',
    }]
};