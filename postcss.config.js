const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'is-active',
        'nav-open',
        'home',
        'home-hero',
        'parent-page-treat',
        'parent-page-test',
        'parent-page-transform',
        'parent-page-team',
        'parent-page-resources',
        'parent-page-get-started',
        'mr-6-m',
      ],
    }),
  ],
}