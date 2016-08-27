"use strict"

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');
var pump = require('pump');
var concat = require('gulp-concat');
var gulpIgnore = require('gulp-ignore');
var minify = require('gulp-minifier');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var minifyOpt = {
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: false,
    minifyCSS: false,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
};

gulp.task('compress-js', function (cb) {
    pump([
            gulp.src([
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-cookies/angular-cookies.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.js',
                    'www/asset/js/directive/index.js',
                    'www/asset/js/directive/media-object/index.js',
                    'www/asset/js/directive/panel/index.js',
                    'www/asset/js/directive/web-content/index.js',
                    'www/asset/js/service/commonService.js',
                    'www/content/aboutMe/index.js',
                    'www/content/home/index.js',
                    'www/content/contact/index.js',
                    'www/content/aboutMe/index.js',
                    'www/content/resume/index.js',
                    'www/content/music/index.js',
                    'www/content/cs/index.js',
                    'www/asset/js/main.js']),
            concat("js/main.min.js"),
            uglify(),
            gulp.dest('dist/asset')
        ],
        cb
    );
});

gulp.task('compress-css', function (cb) {
    pump([
            gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
                     'node_modules/bootstrap/dist/css/bootstrap-theme.css',
                    'www/content/resume/main.css',
                    'www/asset/css/main.css',
                    'www/asset/js/directive/directive.css' ]),
            concat("css/main.min.css"),
            uglifyCss(),
            gulp.dest('dist/asset')
        ],
        cb
    );

});

gulp.task('copy-img', function (cb) {
    pump([
            gulp.src(['www/asset/images/**' ]),
            gulpIgnore('*.js'),
            gulp.dest('dist/asset/images')
        ],
        cb
    );

});

gulp.task('compress-directicve', function (cb) {
    pump([
            gulp.src(['www/asset/js/directive/**' ]),
            gulpIgnore('*.js'),
            gulpIgnore('*.css'),
            minify(minifyOpt),
            gulp.dest('dist/asset/js/directive')
        ],
        cb
    );

});

gulp.task('compress-site-template', function (cb) {
    pump([
            gulp.src(['www/template/**']),
            minify(minifyOpt),
            gulp.dest('dist/template')
        ],
        cb
    );
});

gulp.task('compress-site-content', function (cb) {
    pump([
            gulp.src(['www/content/**']),
            gulpIgnore('*.js'),
            minify(minifyOpt),
            gulp.dest('dist/content')
        ],
        cb
    );
});

gulp.task('compress-site-doc', function (cb) {
    pump([
            gulp.src(['www/doc/**']),
            gulp.dest('dist/doc')
        ],
        cb
    );
});

gulp.task('compress-site-index.html', function (cb) {
    pump([
            gulp.src(['www/index.html']),
            minify(minifyOpt),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('clean-all',function(cb){
    pump([gulp.src('dist'),clean({force: true})],cb);
});

gulp.task('build-all',
            ['compress-js',
            'compress-css',
            'copy-img',
            'compress-directicve',
            'compress-site-content',
            'compress-site-template',
            'compress-site-doc',
            'compress-site-index.html']);

gulp.task('build', function(cb) {
    runSequence('clean-all', 'build-all', cb);
});
