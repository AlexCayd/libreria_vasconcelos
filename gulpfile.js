const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass') (require('sass'))
const webp = require('gulp-webp')
const concat = require('gulp-concat')

function compilarSASS() {
    return src("src/scss/app.scss")
        .pipe( sass())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(dest("./build/css"));
}

function versionwebp() {
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'));
}

function javascript() {
    return src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function watchArchivos() {
    watch("src/scss/**/*.scss", compilarSASS);
    watch('src/js/*.js', javascript);
}

exports.compilarSASS = compilarSASS;
exports.watchArchivos = watchArchivos;
exports.versionwebp = versionwebp;