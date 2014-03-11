#gulp-coco
[![Build Status](https://travis-ci.org/stevelacy/gulp-coco.png?branch=master)](https://travis-ci.org/stevelacy/gulp-coco)
[![NPM version](https://badge.fury.io/js/gulp-coco.png)](http://badge.fury.io/js/gulp-coco)

> Compile [coco](https://github.com/satyr/coco) with [gulp](http://gulpjs.com)

<table>
<tr> 
<td>Package</td><td>gulp-coco</td>
</tr>
<tr>
<td>Description</td>
<td>Compile coco to JavaScript with gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

# Usage

## Install

```
npm install gulp-coco --save
```
##Example


```coffeescript

# CoffeeScript example

gulp = require "gulp"
coco = require "gulp-coco"

gulp.task "coco", ->
  gulp.src "./main.co" 
  .pipe coco()
  .pipe gulp.dest "./"

# Coco example

gulp = require "gulp"
coco = require "gulp-coco"

gulp.task "coco", ->
  gulp.src "./main.co"
  .pipe \coco()
  .pipe \gulp.dest "./"


```

####You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-coco/tree/master/examples)



## LICENSE

(MIT License)

Copyright (c) 2014 Steve Lacy <me@slacy.me> http://slacy.me

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
