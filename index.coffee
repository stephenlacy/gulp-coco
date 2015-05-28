coco = require 'coco'
through = require 'through2'
rext = require 'replace-ext'

module.exports = (opts) ->
  opts ?= {}

  compile = (file, enc, cb) ->

    data = coco.compile file.contents.toString(), opts
    file.contents = new Buffer data
    file.path = rext file.path, '.js'
    cb null, file

  return through.obj compile
