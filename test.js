var _ = require('lodash');

function Foo() {
  this.a = 1;
  this.b = 2;
  this.c = {
  	c1: 1,
  	c2: 'c2',
  	c3: ['xx', 'yy'],
  	c4: function () {}
  };
  this.x = function () {};
  this.y = function () {};
}

Foo.prototype.d = 3;
Foo.prototype.e = function () {};

var result = {};
_.forOwn(new Foo(), function(value, key) {
	if (!_.isFunction(value)) 
});

console.log(_.toPlainObject(new Foo()));