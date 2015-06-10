const DEBUG1 = ::console.log('DEBUG:');
// Currently calls the function back on the same receiver
// var DEBUG1 = console.log.call(console, 'DEBUG:');

const DEBUG2 = ::console.log['DEBUG:'];
// This clashes with existing [] semantics
// var DEBUG2 = console.log['DEBUG:'].bind(console);

const DEBUG3 = ::console.log<'DEBUG:'>;
// SyntaxError

const DEBUG4 = ::console.log{'DEBUG:'};
// SyntaxError

function add(x, y) {
  return x + y;
}

let add1 = ::add(1);
// SyntaxError (we need a context for the bind operator)

// ...
