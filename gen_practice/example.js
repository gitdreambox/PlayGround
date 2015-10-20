/*var hello = function (name) {
    return 'Hello ' + name;
};
*/

// turn it into generator function
// Execute it will create a generator object
var hello = function *(name) {
    return 'Hello ' + name;
};

console.log(hello('simen'));    // {}: generator object

var gen = hello('simen');       // create the generator object
                                // run it next method
console.log(gen.next());        // { value: 'Hello simen', done: true }

// pause using the keyword yield
var hello = function *(name) {
    yield 'Your name is ' + name;
    return 'Hello ' + name;
};

var gen = hello('simen');
console.log(gen.next());        // { value: 'Your name is simen', done: false }
// restart generator is call next()
console.log(gen.next());        // { value: 'Hello simen', done: true }