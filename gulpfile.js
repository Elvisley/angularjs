var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var html = require('gulp-minify-html');
var livereload = require('gulp-livereload');

gulp.task('min_html', function() {
  //compiando os arquivos html para a pasta public
  gulp.src('app/*.html').pipe(gulp.dest('public')).pipe(connect.reload());
});

//Crinado uma tarefa para minificar todos os arquivos js da aplicacao.
gulp.task('min_js', function() {
	//carregando os arquivos js
	gulp.src('app/js/*.js')
		//Minificando o arquivo
		.pipe(uglify())
		//pasta de destino do arquivo minificado
		.pipe(gulp.dest('public/js'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
  	gulp.watch('app/*.html' , ['min_html']);  	
  	gulp.watch('app/js/*.js' , ['min_js'] );
});

gulp.task('connect' ,['watch'], function() {
  connect.server({
    root: 'public/',
    livereload: true
  });
});

//Criando uma tarefa que vai rodar quando o comando gulp ser executado
gulp.task('default' ,  ['connect'] );
