// Binding a function to a context
var log = console.log.bind(console);

// Calling functions with a context
var foo = {};

function bar() {
  log(this);
}

function world(a) {
  log(this, a);
}

bar.call(foo);

function hello() {
  world.apply(foo, arguments);
}
