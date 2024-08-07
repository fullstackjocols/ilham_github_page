module.exports = () => ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-minify'),
    require('autoprefixer'),
    require('tailwindcss'),
  ]
})