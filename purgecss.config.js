module.exports = {
  content: ["./_site/**/*.html", "./assets/js/**/*.js"],
  css: ["./_site/assets/css/style.css"],
  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
};
