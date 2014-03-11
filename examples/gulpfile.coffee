gulp = require "gulp"
coco = require "../"
gulp.task "coco", ->
  gulp.src "./normal.co" 
  .pipe coco()
  .pipe gulp.dest "./"

gulp.task "default", ["coco"]
