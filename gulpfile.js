var gulp = require('gulp');
var del = require('del');
var tslint = require("gulp-tslint");
var ts = require("gulp-typescript");
var jasmine = require('gulp-jasmine');
var tsProject = ts.createProject("tsconfig.json");


function clean() {
    return del(['dist/*']);
}

gulp.task('tslint', () =>
    gulp.src('./src/**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
);

gulp.task('compile', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('jasmine', () =>
    gulp.src('./dist/**/*.spec.js')
        .pipe(jasmine({
            verbose: true
        }))
);


/*Main*/
gulp.task('build', gulp.series(clean, /*'tslint',*/ 'compile', 'jasmine'));



