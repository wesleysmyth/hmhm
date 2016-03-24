var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require("vinyl-source-stream");

gulp.task("browserify", function() {
    var opts = {
        // Required watchify args
        cache: {}, packageCache: {},
        // Specify the entry point of your app
        entries: [ "./client/app.js" ],
        // Add file extentions to make optional in your requires
        extensions: [ ".js", ".jsx" ],
        // Enable source maps!
        debug: true
    };

    var bundler = browserify(opts)
        .transform(babelify)

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source("index.js"))
            .pipe(gulp.dest("./dist/"));
    };

    if (global.isWatching) {
        bundler = watchify(bundler);
        bundler.on("update", bundle);
    }

    return bundle();
});
