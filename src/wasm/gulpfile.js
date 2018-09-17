var gulp = require('gulp');
var exec = require('child_process').exec;

/*
gulp.task('compile', function() {
    exec('./compile.sh', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
    });
});
*/

gulp.task('compile', function() {
    exec('emmake make', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('moveJavascript', function() {
    return gulp.src(['./**/*.js', '!gulpfile.js'])
        .pipe(gulp.dest('../public/js'))
});

gulp.task('deploy:wasm', function() {
    return gulp.src('./**/*.wasm')
        .pipe(gulp.dest('../public/wasm'))
});

gulp.task('default', ['compile', 'moveJavascript', 'deploy:wasm'], function() {
    gulp.watch('./**/*.c', ['compile', 'moveJavascript', 'deploy:wasm']);
});