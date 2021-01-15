module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        28: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
