//引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: 'app',
        port:process.env.PORT || 8080
    });
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect']);
