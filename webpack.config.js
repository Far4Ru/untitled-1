import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = 'C:/xampp/htdocs' //path.dirname(__filename)

export default {
    entry: './src/index.ts',
    module: {
        rules: [
            { test: /\.md$/, use: [ 'html-loader', 'markdown-loader' ] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.resolve(__dirname, 'workbook'),
      filename: 'index.js'
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}