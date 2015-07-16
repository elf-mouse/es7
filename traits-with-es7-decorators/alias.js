'use strict'

import { traits, alias } from 'traits-decorator'

class Foo {
  foo() { console.log('Foo:foo') }
}

class FooBar {
  foo() { console.log('FooBar:foo') }
  bar() { console.log('FooBar:bar') }
}

@traits(Foo, FooBar::alias({foo: 'aliasFoo'}))
class MyClass {
  //...
}

let instance = new MyClass()

instance.foo() // Foo:foo
instance.aliasFoo() // FooBar:foo
instance.bar() // FooBar:bar
