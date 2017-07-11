'use strict'

import { traits, excludes } from 'traits-decorator'

class Foo {
  foo() { console.log('Foo:foo') }
}

class FooBar {
  foo() { console.log('FooBar:foo') }
  bar() { console.log('FooBar:bar') }
}

@traits(Foo, FooBar::excludes('foo'))
class MyClass {
  //...
}

let instance = new MyClass()

instance.foo() // Foo:foo
instance.bar() // FooBar:bar
