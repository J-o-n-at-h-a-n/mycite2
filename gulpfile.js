const { series } = require('gulp');


const gulp = require("gulp");
const browsersync = require("browser-sync").create();

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

// CSS task
function css() {
    return gulp
        .src("./style.css")
        .pipe(browsersync.stream());
}

// HTML task
function html() {
    return gulp
        .src("./*.html")
        .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
    gulp.watch("./*.html", html);
    gulp.watch("./style.css", css);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.default = watch;
