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
        'page-home',
        'page-resources',
        'page-get-started',
        'page-adhd',
        'page-comprehensive',
        'home-hero',
        'parent-page-treat',
        'parent-page-test',
        'parent-page-transform',
        'parent-page-team',
        'parent-page-resources',
        'parent-page-get-started',
        'parent-page-child-testing',
        'parent-page-adult-testing',
        'mr-6-m',
        'list-open',
        'resources-sub-menu',
      ],
    }),
  ],
}