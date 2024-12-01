// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// // import react from '@vitejs/plugin-react';
// import postcss from 'rollup-plugin-postcss';
// import sourcemaps from 'rollup-plugin-sourcemaps';
// import { terser } from 'rollup-plugin-terser';

// export default {
//     input: 'src/index.js', // Your components' entry point
//     output: [
//         {
//             file: 'dist/index.cjs.js',
//             format: 'cjs',
//             // exports: 'named',
//             sourcemap: true, // Enable sourcemaps
//         },
//         {
//             file: 'dist/index.esm.js',
//             format: 'esm',
//             sourcemap: true,
//         },
//     ],
//     plugins: [
//         // to fix error [!] Error: Could not resolve './components/Button' from src/index.js
//         resolve({
//             extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         }),
//         // resolve(),
//         commonjs(),
//         // react(), // Handles React/JSX
//         postcss({
//             extensions: ['.css'], // Ensures .css files are handled
//             extract: true, // Extracts CSS to a separate file
//         }),
//         babel({
//             presets: ['@babel/preset-env', '@babel/preset-react'], // Add React support
//             babelHelpers: 'bundled',
//             exclude: 'node_modules/**',
//             extensions: ['.js', '.jsx'], // Ensure Babel processes .jsx files
//         }),
//         // babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
//         terser(),
//         sourcemaps(),
//     ],
//     external: ['react', 'react-dom'],
// };



import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js', // Your components' entry point
    output: [
        {
            file: 'dist/index.js', // CommonJS format
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.es.js', // ESM format
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
        // json(),
        commonjs(),         // Convert CommonJS to ES modules
        postcss({
            extensions: ['.css'], // Ensures .css files are handled
            extract: true, // Extracts CSS to a separate file
        }),
        babel({
            // presets: [
            //     [
            //         '@babel/preset-react',
            //         {
            //             // runtime: 'classic', // Classic runtime
            //             // pragma: 'h', // Factory function for JSX (Preact)
            //             // pragmaFrag: 'Fragment', // Fragment handling
            //             // importSource: 'preact', // Library source

            //             mode: 'automatic',
            //             factory: 'React.createElement',
            //             importSource: 'react',
            //             jsxImportSource: 'react/jsx-runtime'
            //         },
            //     ],
            //     '@babel/preset-env', // For ES6+ transpilation
            // ],
            presets: [['@babel/preset-react', { "runtime": "automatic" }]],
            // plugins: ['@babel/plugin-transform-runtime'], // Handle async/await
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Include TypeScript extensions if needed
        }),
    ],
    external: ['react', 'react-dom'], // Ensure React is not bundled
    // preserveModules: true,

};
