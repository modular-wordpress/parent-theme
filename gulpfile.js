const gulp = require("gulp");
const {generateParentTasks} = require("./tasks");

generateParentTasks();

gulp.task("default", ["parent-build-theme"]);