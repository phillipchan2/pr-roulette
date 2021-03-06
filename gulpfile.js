// Include gulp & gulp plugins
var concat = require('gulp-concat');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minify = require('gulp-minify');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

// Compile SASS
gulp.task('sass', function() {
	return gulp.src('client/src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('app.css'))
	.pipe(gulp.dest('client/css'))
});

// Concat JS Files
gulp.task('scripts', function() {
	return gulp.src([
		// angular
		'node_modules/angular/angular.min.js',
		'node_modules/angular-mocks/angular-mocks.js',

		// plugins
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-ui-router-anim-in-out/anim-in-out.js',
		'node_modules/jquery/dist/jquery.min.js',
		'client/src/js/plugins/roulette.min.js',
		'client/src/js/plugins/html2canvas.js',

		// our app
		'client/src/js/app.module.js',
		'client/src/js/app.routes.js',

		// application models
		'client/src/js/models/applicationState.js',
		'client/src/js/models/requests.js',
		'client/src/js/models/token.js',
		'client/src/js/models/ajaxHelper.js',

		// application controllers
		'client/src/js/controllers/mainController.js',

		// authentication
		'client/src/js/components/authentication/authentication.module.js',
		'client/src/js/components/authentication/registration.controller.js',
		'client/src/js/components/authentication/login.controller.js',

		// home
		'client/src/js/components/home/home.module.js',
		'client/src/js/components/home/home.controller.js',

		// dashboard
		'client/src/js/components/dashboard/dashboard.module.js',
		'client/src/js/components/dashboard/dashboard.controller.js',

		// settings
		'client/src/js/components/settings/settings.module.js',
		'client/src/js/components/settings/settings.controller.js',
		'client/src/js/components/settings/settings.model.js',

		// teams
		'client/src/js/components/teams/teams.module.js',
		'client/src/js/components/teams/teams.controller.js',
		'client/src/js/components/teams/teams.model.js',

		// search
		'client/src/js/components/search/search.module.js',
		'client/src/js/components/search/search.controller.js',
		'client/src/js/components/search/search.model.js',

		// roulette
		'client/src/js/components/roulette/roulette.module.js',
		'client/src/js/components/roulette/roulette.controller.js',
		'client/src/js/components/roulette/roulette.model.js'

		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('client/js'));
});

gulp.task('refresh', function() {
	return gulp.src('client/index.html')
	.pipe(livereload({start: true}))
});

// Watch for changes
gulp.task('watch', function() {
	// Watch .js files
	gulp.watch('client/src/js/**/*.js', function() {
		runSequence('scripts', 'refresh')
	});

	// Watch .scss files
	gulp.watch('client/src/scss/*.scss', function() {
		runSequence('sass', 'refresh')
	});

	// Watch HTML files
	gulp.watch('**/*.html', function() {
		runSequence('refresh')
	});
});


// Default Task
gulp.task('default', function() {
	runSequence('scripts', 'sass', 'watch', 'refresh');
});
