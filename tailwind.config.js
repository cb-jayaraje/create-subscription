const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./dist/*.{html,js}", "./dist/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
