/**
 * Created by MWei2 on 12/6/2016.
 */
var gulp = require("gulp")
var babel = require("gulp-babel")
gulp.task("es2015",function(){
    return gulp.src("src/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
})

gulp.task("default",["es2015"]);