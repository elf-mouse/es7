// Binding a function to a context
let log = ::console.log;

// Calling functions with a context
let foo = {};

function bar() {
  log(this);
}

function world(a) {
  log(this, a);
}

foo::bar();

function hello() {
  foo::world(...arguments);
}
