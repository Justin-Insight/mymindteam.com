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
        'nav-collapse',
        'nav-expand',
        'has-dropdown-open',
        'page-home',
        'page-resources',
        'page-get-started',
        'page-adhd',
        'page-comprehensive',
        'page-child-testing',
        'page-adult-testing',
        'page-payment-options',
        'page-specialty',
        'page-faqs',
        'home-hero',
        'parent-page-treat',
        'parent-page-test',
        'parent-page-transform',
        'parent-page-team',
        'parent-page-resources',
        'parent-page-get-started',
        'parent-page-child-testing',
        'parent-page-adult-testing',
        'parent-page-blog',
        'mr-6-m',
        'list-open',
        'resources-sub-menu',
        'hr',
        'blockquote',
        'has-search-open',
        'search',
        'search__icon-wrapper',
        'pagefind-ui__drawer',
        'pagefind-ui__results',
        'pagefind-ui__result-link',
        'pagefind-ui__message',
        'pagefind-ui__results',
        'search-open',
        'mark',
      ],
    }),
  ],
}