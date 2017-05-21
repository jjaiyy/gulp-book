// 加载node模块/组件
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// 样式
gulp.task('styles', function () {
    return gulp.src('css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/'));
});

// 脚本文件
gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// 查看文件更改
gulp.task('watch', function () {
    gulp.watch('css/*.css', 'styles');
    gulp.watch('js/*.js', 'scripts');
});

//默认任务
gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));

