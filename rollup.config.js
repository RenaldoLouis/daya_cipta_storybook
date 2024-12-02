import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/index.js', // Your components' entry point
    output: [
        {
            file: 'dist/index.cjs.js', // CommonJS format
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js', // ESM format
            format: 'esm',
            sourcemap: true,
            exports: 'named',

        },
    ],
    plugins: [
        peerDepsExternal(), // Exclude peer dependencies like React
        resolve({
            browser: true,
            preferBuiltins: false,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        commonjs(),// Convert CommonJS to ES modules
        postcss(
            {
                extract: true, // Extracts CSS to a separate file
                minimize: true, // Minifies the CSS
                plugins: [require('autoprefixer')()],
                extensions: ['.css'], // Ensures .css files are handled
                extract: true, // Extracts CSS to a separate file
                inject: true
            }
        ),
        terser(),
        babel({
            presets: [['@babel/preset-react', { "runtime": "automatic" }]],
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Include TypeScript extensions if needed
        }),
    ],
    external: ['react', 'react-dom'], // Ensure React is not bundled
};
