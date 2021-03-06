var gulp = require('gulp');

gulp.task('copia-semantic-ui', function() {
    gulp.src('./semantic/dist/**/*')
        .pipe(gulp.dest('src/assets/semantic/'));
});

gulp.task('copia-jquery', function() {
    gulp.src('./node_modules/jquery/dist/*')
        .pipe(gulp.dest('src/assets/js/jquery/'));
});

gulp.task('build-assets', [
    'copia-semantic-ui',
    'copia-jquery',
]);
