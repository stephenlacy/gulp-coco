(function(){
  var coco, last, pythagorases, res$, a, b, h, i$, ref$, len$, mixin, e, Cat, slice$ = [].slice, out$ = typeof exports != 'undefined' && exports || this;
  coco = require("coco");
  last = function(it){
    return it[it.length - 1];
  };
  function equals(){
    return arguments[0] == arguments[1];
  }
  $('.account').addClass('active').show('slow');
  res$ = [];
  for (a = 9; a >= 1; --a) {
    for (b = a; b < 99; ++b) {
      h = Math.pow(a * a + b * b, 0.5);
      if (!(h % 1)) {
        res$.push([a, b, h]);
      }
    }
  }
  pythagorases = res$;
  for (i$ = 0, len$ = (ref$ = ['head', 'body', 'tail']).length; i$ < len$; ++i$) {
    (fn$.call(this, i$, ref$[i$]));
  }
  mixin = function(){
    var objects, i$, x0$, len$;
    objects = slice$.call(arguments);
    for (i$ = 0, len$ = objects.length; i$ < len$; ++i$) {
      x0$ = objects[i$];
      import$(this, x0$);
    }
    return this;
  };
  alert((function(){
    try {
      return nonexistent / void 8;
    } catch (e$) {
      e = e$;
      return "And the error is ... " + e;
    }
  }()));
  out$.Cat = Cat = (function(superclass){
    Cat.displayName = 'Cat';
    var prototype = extend$(Cat, superclass).prototype, constructor = Cat;
    function Cat(name){
      var this$ = this;
      this.name = name;
      superclass.apply(this, arguments);
      this.meowed = 0;
      this.meow = function(){
        return ++this$.meowed;
      };
    }
    Cat.interval = 5000;
    prototype.play = function(){
      return setInterval(this.meow, constructor.interval);
    };
    prototype.bark = function(){
      throw Error('unimplemented');
    };
    return Cat;
  }(Animal));
  switch (day) {
  case 'Fri':
  case 'Sat':
    if (day !== rainy) {
      go(bingo);
      go(dancing);
    }
    break;
  case 'Sun':
    go(church);
    break;
  default:
    go(work);
  }
  function fn$(index, filename){
    (function(timestamp){
      var this$ = this;
      fs.readFile(filename, function(err, contents){
        return this$.compile(filename, index, contents, timestamp);
      });
    }.call(this, new Date));
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
}).call(this);
