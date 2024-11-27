import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js', // Your components' entry point
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
