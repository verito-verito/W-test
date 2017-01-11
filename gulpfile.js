var gulp = require('gulp'),     
    sass = require('gulp-sass') ,
    notify = require("gulp-notify") ,
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    config = {
	     source: './src/',
	     bowerDir: './bower_components/' ,
		public: './public/'
	};

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + 'font-awesome/fonts/**.*') 
        .pipe(gulp.dest(config.public + 'fonts/font-awesome')); 
});

gulp.task('sass', function () {
	var cssComp = gulp
		.src([
			config.bowerDir + 'animate.css/animate.css',
			config.bowerDir + 'swiper/dist/css/swiper.css'
		]);

	var sassComp = gulp.src(config.source + 'sass/styles.scss')
		.pipe(sass().on('error', sass.logError));

	//.pipe(gulp.dest(config.public + 'css'))
	return merge(cssComp, sassComp)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(config.public + 'css'));
});

gulp.task('js', function () {
	return gulp
		.src([
			config.bowerDir + 'jquery/dist/jquery.js',
			config.bowerDir + 'bootstrap-sass/assets/javascripts/_bootstrap.js'
		])
        .pipe(concat('all.js'))
        .pipe(gulp.dest(config.public + 'js'));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.source + 'sass/**/*.scss', ['sass']); 
     gulp.watch(config.source + 'js/**/*.js', ['js']); 
});

  gulp.task('default', ['js', 'icons', 'sass']);