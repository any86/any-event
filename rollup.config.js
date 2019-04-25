// import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
export default {
    input: './src/main.ts',
    plugins: [typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript')
    })],
    
    output: [{
        sourcemap: true,
        format: 'cjs',
        file: 'dist/AnyEvent.common.js',
    },{
        sourcemap: true,
        format: 'es',
        file: 'dist/AnyEvent.es.js',
    }, {
        sourcemap: true,
        format: 'umd',
        name: 'AnyEvent',
        file: 'dist/AnyEvent.umd.js',
    }]
};