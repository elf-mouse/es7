## Decorators

```js
function Testable (target) { target.isTestable = true }

@Testable
class ATestableClass {

}

// now we can check if the class is testable
ATestableClass.isTestable // true
```

## Introducing traits-decorator module

This new module, already available on npm, allows us to experiment with the same trait concept we use in Cocktail using ES7 decorators.

### How do we use ES7 functionality?

```
npm i -g babel

npm i -S traits-decorator
```

## Bind Operator

The bind-operator, another ES7 experimental feature, allow us to execute a given method as it were part of the current caller.

> example-bind-operator.js

```
babel-node --stage 0 example-bind-operator.js
{ state: 1 }
```

## Solving Conflicts with traits-decorator

In case we have to solve a name conflict, by excluding or aliasing a method, we provide those as `bindings`.

### Alias

To solve a conflict by aliasing a method we use the `alias` binding:

> alias.js

To run this `alias.js` you need the --stage 0 param as decribed in the previous example.

### Exclusion

In a similar way we can use `excludes` binding to remove the conflict:

> excludes.js

Run this example with --stage 0 param.

### Combine alias and excludes

We can chain `alias` and `excludes`:

```js
@traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
class MyClass {}
```

There is another binding `as` to define exclusions and aliases in one operation:

> combine-alias-excludes.js

Again, run the example with --stage 0 param.

## Compatibility with Cocktail Traits

We can use any of the current traits defined using `cocktail` with `traits-decorator`. The following example will showcase `cocktail-trait-eventable` applied with `traits` decorator:

```js
'use strict';

import { traits } from 'traits-decorator'

import Eventable from 'cocktail-trait-eventable'
import EventEmitter from 'events'


@traits(Eventable)
class Evented {

  constructor() {
    this._emitter = new EventEmitter()
  }

  // glue code for Eventable trait
  getEmitter() {
    return this._emitter
  }

  emitFoo() {
    this.emit('foo')
  }
}

let evented = new Evented()

evented.on('foo', () => console.log('whooaa'))

evented.emitFoo()
```
