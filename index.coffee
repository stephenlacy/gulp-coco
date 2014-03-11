coco = require "coco"
map = require "map-stream"
rext = require "replace-ext"


module.exports = (opts) ->
  opts = {} unless opts

  compile = (file, cb) ->

    data = coco.compile file.contents.toString(), opts
    file.contents = new Buffer data
    file.path = rext file.path, ".js"
    cb null, file

  return map compile