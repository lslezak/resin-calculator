
// see https://i18next.github.io/i18next-scanner/

var gulp = require('gulp');
var scanner = require('i18next-scanner');

gulp.task('i18next', function () {
  return gulp.src(['src/**/*.{js,html}'])
    .pipe(scanner({
      // supported languages
      lngs: ['cs'],
      nsSeparator: false,
      keySeparator: false,
      resource: {
        // the source path is relative to current working directory
        loadPath: 'src/i18n/{{lng}}.json',
        // the destination path is relative to your `gulp.dest()` path
        savePath: 'i18n/{{lng}}.json'
      }
    }))
    .pipe(gulp.dest('src'));
});
