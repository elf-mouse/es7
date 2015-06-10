var DEBUG = console.log.bind(console, 'DEBUG:');

function add(x, y) {
  return x + y;
}

var add1 = add.bind(null, 1);
var three = add1(2);

DEBUG(three); // prints "DEBUG: 3"
