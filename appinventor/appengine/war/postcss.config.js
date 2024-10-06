let tailwindcss = require('tailwindcss');

// postcss.config.js
module.exports = {
  plugins: [
    tailwindcss('./build/war/tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}
