var gulp = require("gulp");
var uglify = require("gulp-uglify");
var obfuscate = require("gulp-obfuscate");
var sass = require("gulp-sass");
var browserSync = require("browser-syn").create();
var browserify = require("gulp-browserify");

var rutas = {
	publicAssets: 'public/assets',
	rutasJS: 'src/assets/js/*.js',
	rutaSCSS: 'src/asssets/scss/*.scss'
};

gulp.task("assets",function(){
		gulp.src("index.html")
		.pipe(gulp.dest("public"))
	});

gulp.task('prepararJS', function(){
	gulp.src(rutas.rutasJS)
	.pipe(uglify())
	.pipe(obfuscate())
	.pipe(browserify())
	.pipe(gulp.dest(rutas.publicAssets))
});

gulp.task('prepararSCSS', function(){
	gulp.src(rutas.rutaSCSS)
	.pipe(sass({
		outputstyle: 'compressed',
		precision:3})
	.on('error', sass.logError)
	.pipe(gulp.dest(rutas.publicAssets))
)
});

gulp.task('sass-watch'['prepararSCSS'],function(){
	browserSync.reaload();
	done();
});
gulp.task('js-watch'['prepararJS'],function(){
	browserSync.reload();
	done();
});
gulp.task('html-watch'[''])
