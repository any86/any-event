// import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
export default {
    input: './src/main.ts',
    plugins: [typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript')
    })],
    sourcemap: true,
    output: [{
        format: 'cjs',
        file: 'dist/anyEvent.common.js',
    },{
        format: 'es',
        file: 'dist/anyEvent.es.js',
    }, {
        format: 'umd',
        name: 'anyEvent',
        file: 'dist/anyEvent.umd.js',
    }]
};