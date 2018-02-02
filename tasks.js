const gulp = require("gulp");
const sass = require("gulp-sass");

module.exports = {
    /**
     * Creates all tasks for the parent theme. These include:
     *   - {prefix}-build-css
     * 
     * @param {String} prefix Defaults to "parent". The prefix to put at the 
     *  beginning of all tasks generated.
     * 
     * @param {String} outputLocation The path (without the trailing slash)
     *  where the parent build should output to.
     */
    generateParentTasks: function(prefix = "parent",
        outputLocation = `${__dirname}/build`) {
        const SASS_SOURCES = [
            `${__dirname}/src/sass/*.scss`,
            `${__dirname}/src/sass/**/*.scss`
        ];

        const STATIC_FILE_SOURCES = [
            `${__dirname}/src/rtl.css`,
            `${__dirname}/src/*.php`
        ];

        gulp.task(`${prefix}-build-theme`, [
            `${prefix}-build-css`,
            `${prefix}-copy-static-files`
        ]);

        gulp.task(`${prefix}-build-css`, function() {
            return gulp.src(SASS_SOURCES)
                .pipe(sass())
                .pipe(gulp.dest(`${outputLocation}/`));
        });

        gulp.task(`${prefix}-copy-static-files`, [
            `${prefix}-copy-primary-static-files`,
            `${prefix}-copy-template-parts-static-files`,
            `${prefix}-copy-inc-static-files`,
            `${prefix}-copy-layouts-static-files`,
            `${prefix}-copy-js-static-files`
        ]);

        gulp.task(`${prefix}-copy-primary-static-files`, function() {
            return gulp.src(STATIC_FILE_SOURCES)
                .pipe(gulp.dest(`${outputLocation}/`));
        });

        gulp.task(`${prefix}-copy-template-parts-static-files`, function() {
            return gulp.src([`${__dirname}/src/template-parts/*.php`])
                .pipe(gulp.dest(`${outputLocation}/template-parts/`));
        });

        gulp.task(`${prefix}-copy-inc-static-files`, function() {
            return gulp.src([`${__dirname}/src/inc/*.php`])
                .pipe(gulp.dest(`${outputLocation}/inc/`));
        });

        gulp.task(`${prefix}-copy-layouts-static-files`, function() {
            return gulp.src([`${__dirname}/src/layouts/*.css`])
                .pipe(gulp.dest(`${outputLocation}/layouts/`));
        });

        gulp.task(`${prefix}-copy-js-static-files`, function() {
            return gulp.src([`${__dirname}/src/js/*.js`])
                .pipe(gulp.dest(`${outputLocation}/js/`));
        });
    }
};