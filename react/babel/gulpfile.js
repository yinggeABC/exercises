/**
 * Created by MWei2 on 11/15/2016.
 */
var gulp = require("gulp")
var concat = require("gulp-concat")
var babel = require("gulp-babel")
var rename = require("gulp-rename")
var uglify = require("gulp-uglify")
var less = require("gulp-less")
var minify = require("gulp-minify-css")
var inject = require("gulp-inject");
var connect = require("gulp-connect");
var minifyHtml= require("gulp-minify-html")
gulp.task("js",function(){
   return gulp.src("src/js/*.js").pipe(concat("index.js")).pipe(babel({"presets":"es2015"})).pipe(uglify()).pipe(rename("all.min.js"))
    .pipe(gulp.dest("./build/js"));
})

gulp.task("css",function(){
    return gulp.src("src/less/*.less").pipe(concat("index.less")).pipe(less()).pipe(minify()).pipe(rename("all.min.css"))
    .pipe(gulp.dest("./build/css"))
})

gulp.task("images",function(){
    return gulp.src("src/imgs/*.png").pipe(gulp.dest("./build/imgs"))
})

gulp.task("html",["js","css","images"],function(){
    var target = gulp.src("./src/index.html");
    var sources = gulp.src(["./build/js/all.min.js","./build/css/all.min.css"],{read:false});
    return target.pipe(inject(sources)).pipe(gulp.dest("./")).pipe(connect.reload());
})

gulp.task("server",function(){
    connect.server({
        root:"/",
        port:8080,
        host:"gulp.dev",
        livereload:true
    })
})

gulp.task("watch",function(){
    gulp.watch("src/index.html",["html"])
})
gulp.task("default",["html","server","watch"])
