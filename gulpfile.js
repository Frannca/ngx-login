var gulp = require('gulp');

// Copia os arquivos do Semantic UI para a pasta assets do Angular
gulp.task('copia-semantic-ui', function() {
    gulp.src('./semantic/dist/**/*')
        .pipe(gulp.dest('src/assets/semantic/'));
});

// Copia os arquivos jQuery para a pasta assets do Angular
gulp.task('copia-jquery', function() {
    gulp.src('./node_modules/jquery/dist/*')
        .pipe(gulp.dest('src/assets/js/jquery/'));
});

gulp.task('build-assets', [
    'copia-semantic-ui',
    'copia-jquery',
]);