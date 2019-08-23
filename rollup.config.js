// ts转js的编译器
import typescript from 'rollup-plugin-typescript';
// 读取package.json
import pkg from './package.json';
// 代码生成sourcemaps
import sourceMaps from 'rollup-plugin-sourcemaps'

// 代码头
const banner =
    `/*!
 * AnyEvent.js v${pkg.version}
 * (c) 2018-${new Date().getFullYear()} Russell
 * https://github.com/any86/any-touch
 * Released under the MIT License.
 */`

export default {
    input: './src/main.ts',
    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),

        }),

        sourceMaps()

    ],
    output: [{
            format: 'cjs',
            // 生成的文件名和路径
            // package.json的main字段, 也就是模块的入口文件
            file: pkg.main, 
            banner,
            sourcemap: true
        },
        {
            format: 'es',
            // rollup和webpack识别的入口文件, 如果没有该字段, 那么会去读取main字段
            file: pkg.module,
            banner,
            sourcemap: true
        },
        // {
        //     format: 'umd',
        //     name: 'AnyEvent',
        //     file: pkg.browser,
        //     banner,
        //     sourcemap: true
        // }
    ]
};