fs = require "fs"
should = require "should"
gutil = require "gulp-util"
coco = require "../"

require "mocha"

describe "gulp-coco", ->
  it "should compile normal coco", (done) ->
    Co = coco()
    fakeFile = new gutil.File
      base: "test/fixtures"
      cwd: "test/"
      path: "test/fixtures/normal"
      contents: fs.readFileSync "test/fixtures/normal.co"
    
    Co.once "data", (newFile) ->
      should.exist newFile
      should.exist newFile.contents
      String(newFile.contents).should.equal fs.readFileSync "test/expected/normal.js", "utf8"
      done()

    Co.write fakeFile
