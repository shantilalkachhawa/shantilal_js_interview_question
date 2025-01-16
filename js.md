# Tree shaking and bundling in modern JavaScript applications.
   Tree shaking-
    It helps in reducing the bundle size by removing unused imports and functions
    How it Works:
    Tree shaking relies on ES6 module syntax (import and export).
    It only works when modules are statically analyzable.
    Tools like Webpack and Rollup use it during the build process.
    Reduces code size

    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;
    export const multiply = (a, b) => a * b;

    // app.js
    import { add } from './math.js';
    console.log("Adding: ", add(2, 3));  // Using only the `add` function


    

   Bundling
    Bundling is the process of combining multiple JavaScript files and their dependencies into a single file (or a few files) for easier deployment and improved performance.
    Reduces file count
    After Bundling (Using Webpack Output)


    module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        usedExports: true,  // Enables tree shaking
    },
}  ;

    Tree Shaking: The subtract and multiply functions were eliminated from the final bundle.
    Bundling: All JavaScript files were combined into a single bundle.js file.
    Optimization: Enabled with usedExports: true in the Webpack config.

