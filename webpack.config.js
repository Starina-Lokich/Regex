const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Каталог для результатов сборки
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JavaScript-файлов
        exclude: /node_modules/, // Исключаем node_modules
        use: {
          loader: 'babel-loader', // Загрузчик для Babel
          options: {
            presets: ['@babel/preset-env'], // Пресет для современного JavaScript
            sourceType: 'unambiguous', // Автоматическое определение типа модулей
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML-файла
    }),
  ],
  mode: 'production', // Режим production
};