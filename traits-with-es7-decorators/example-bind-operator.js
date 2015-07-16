'use strict'

function logMe() { console.log(this) }

let obj = { state: 1 }

obj::logMe()

// babel-node --stage 0 example-bind-operator.js
// { state: 1 }
