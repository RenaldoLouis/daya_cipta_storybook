import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import react from '@vitejs/plugin-react';
import postcss from 'rollup-plugin-postcss';
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
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        // resolve(),
        commonjs(),
        // react(), // Handles React/JSX
        postcss({
            extensions: ['.css'], // Ensures .css files are handled
            extract: true, // Extracts CSS to a separate file
        }),
        babel({
            presets: ['@babel/preset-react'], // Add React support
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx'], // Ensure Babel processes .jsx files
        }),
        // babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
