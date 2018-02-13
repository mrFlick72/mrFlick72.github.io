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
                    'node_modules/angular-sanitize/angular-sanitize.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'src/asset/js/directive/index.js',
                    'src/asset/js/directive/media-object/index.js',
                    'src/asset/js/directive/twitter-reader/index.js',
                    'src/asset/js/directive/panel/index.js',
                    'src/asset/js/directive/web-content/index.js',
                    'src/asset/js/service/commonService.js',
                    'src/content/aboutMe/index.js',
                    'src/content/home/index.js',
                    'src/content/contact/index.js',
                    'src/content/aboutMe/index.js',
                    'src/content/resume/index.js',
                    'src/content/music/index.js',
                    'src/content/cs/index.js',
                    'src/asset/js/main.js']),
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
                    'src/content/resume/main.css',
                    'src/asset/css/main.css',
                    'src/asset/css/twitter.css',
                    'src/asset/js/directive/directive.css' ]),
            concat("css/main.min.css"),
            uglifyCss(),
            gulp.dest('dist/asset')
        ],
        cb
    );

});

gulp.task('copy-img', function (cb) {
    pump([
            gulp.src(['src/asset/images/**' ]),
            gulpIgnore('*.js'),
            gulp.dest('dist/asset/images')
        ],
        cb
    );

});
gulp.task('copy-data', function (cb) {
    pump([
            gulp.src(['src/asset/data/**' ]),
            gulpIgnore('*.js'),
            gulp.dest('dist/asset/data')
        ],
        cb
    );

});

gulp.task('compress-directicve', function (cb) {
    pump([
            gulp.src(['src/asset/js/directive/**' ]),
            gulpIgnore('*.js'),
            gulpIgnore('*.css'),
            minify(minifyOpt),
            gulp.dest('dist/asset/js/directive')
        ],
        cb
    );

});


gulp.task('compress-site-content', function (cb) {
    pump([
            gulp.src(['src/content/**']),
            gulpIgnore('*.js'),
            minify(minifyOpt),
            gulp.dest('dist/content')
        ],
        cb
    );
});

gulp.task('compress-site-doc', function (cb) {
    pump([
            gulp.src(['src/doc/**']),
            gulp.dest('dist/doc')
        ],
        cb
    );
});

gulp.task('compress-site-index.html', function (cb) {
    pump([
            gulp.src(['src/index.html']),
            minify(minifyOpt),
            gulp.dest('')
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
            "copy-data",
            'compress-directicve',
            'compress-site-content',
            'compress-site-doc',
            'compress-site-index.html']);

gulp.task('build', function(cb) {
    runSequence('clean-all', 'build-all', cb);
});
