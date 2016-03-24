var browserSync = require("browser-sync");
var gulp = require("gulp");

gulp.task("browserSync", [ "build" ], function() {
    browserSync({
        open: false,
        https: true,
        server: {
            // src is included for use with sass source maps
            baseDir: [ "dist" ]
        },
            files: [
            // Watch everything in build
            "dist/",
            // Exclude sourcemap files
            "!dist/**.map"
        ]
    });
});
