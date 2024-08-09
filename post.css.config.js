const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
