module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        28: "28rem",
      },
      maxWidth: {
        8: "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
