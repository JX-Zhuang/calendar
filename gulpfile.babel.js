import gulp from 'gulp';
import babel from 'gulp-babel';
import publish from 'gulp-publish';
import watch from 'gulp-watch';
import connect from 'gulp-connect';
import mocha from 'gulp-mocha';
import browserify from 'gulp-browserify';
// import browserify from 'browserify';
// const path = [/app\/[^_]*\/\*/,/app\/\*/];
const path = ['app/js/*','app/css/*','app/*.'];

gulp.task('babel',()=>{
	gulp.src('app/js/*.js')
		.pipe(babel({
			presets:['es2015'],
		}))
		.pipe(gulp.dest('app/_js/'));
	console.log('babel ok');
});
gulp.task('publish',()=>{
	gulp.src('app/*.html')
		.pipe(publish())
		.pipe(gulp.dest('www/app/'));
	gulp.src('app/css/*')
		.pipe(publish())
		.pipe(gulp.dest('www/app/css/'));
	gulp.src('app/_js/index.js')
		.pipe(browserify())
		.pipe(gulp.dest('www/app/js/'));
	console.log('publish ok');
});
gulp.task('mocha',()=>{
	return gulp.src(['www/app/js/*','www/app/css/*','www/app/*'],{read:false})
		.pipe(mocha({reporter:'nyan'}));
});
gulp.task('connect',()=>{
	connect.server({
		root:'www',
		port:5560,
		livereload: true      
	});
	console.log('connect ok');
});
gulp.task('html',()=>{
	gulp.src('www/app/index.html')
		.pipe(connect.reload());
})
gulp.task('watch',()=>{
	gulp.watch(path,['babel','publish','html','mocha']);
	console.log('watch ok');	
});

gulp.task('default',['babel','publish','connect','html','mocha','watch']);








