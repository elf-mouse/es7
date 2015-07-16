'use strict'

import { traits, as } from 'traits-decorator'

class Foo {
  foo() { console.log('Foo:foo') }
}

class FooBar {
  foo() { console.log('FooBar:foo') }
  bar() { console.log('FooBar:bar') }
}

@traits(Foo, FooBar::as({excludes:['foo'], alias: {bar: 'fooBar'}}))
class MyClass {
  //...
}

let instance = new MyClass()

instance.foo() // Foo:foo
instance.fooBar() // FooBar:bar
