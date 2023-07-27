gulp.task('default', ['styles'], function() {
    // watch for CSS changes
    gulp.watch('src/styles/*.css', function() {
       // run styles upon changes
       gulp.run('styles');
    });
 });