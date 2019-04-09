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
        file: 'dist/AnyEvent.common.js',
    },{
        format: 'es',
        file: 'dist/AnyEvent.es.js',
    }, {
        format: 'umd',
        name: 'AnyEvent',
        file: 'dist/AnyEvent.umd.js',
    }]
};