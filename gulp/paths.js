'use strict';

module.exports = {
  source: {
    templates: './src/templates/**/*.jade',
    slides: './src/slides/*.md',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/img/**/*',
    files: {
      jade: './src/templates/**/*.jade',
      styl: './src/styl/main.styl'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/css/**/*.css',
    js: './build/js/**/*.js',
    img: './build/img/**/*',
  },

  build: {
    html: './docs/',
    css: './docs/css',
    js: './docs/js',
    img: './docs/img',
  },

  deploy: {
    pages: './build/**/*'
  }
};
