// var _ = require('lodash');

// function Foo() {
//   this.a = 1;
//   this.b = 2;
//   this.c = {
//   	c1: 1,
//   	c2: 'c2',
//   	c3: ['xx', 'yy'],
//   	c4: function () {}
//   };
//   this.x = function () {};
//   this.y = function () {};
// }

// Foo.prototype.d = 3;
// Foo.prototype.e = function () {};

// var result = {};
// _.forOwn(new Foo(), function(value, key) {
// 	if (!_.isFunction(value)) 
// });

// console.log(_.toPlainObject(new Foo()));
var diff = require('deep-diff').diff;
var observableDiff = require('deep-diff').observableDiff,
    applyChange = require('deep-diff').applyChange;
 
var lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};
 
var rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};
 
var differences = diff(lhs, rhs);
console.log(differences);

observableDiff(lhs, rhs, function (d) {
    // Apply all changes except those to the 'name' property... 
    // if (d.path.length !== 1 || d.path.join('.') !== 'name') {
        applyChange(lhs, rhs, d);
    //}
});

console.log(lhs);