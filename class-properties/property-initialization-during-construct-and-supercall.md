```js
class Base {
  baseProp = 42;
  overridableProp = 43;

  constructor() {
    console.log('Running base constructor');
    console.log('baseProp', this.baseProp);
    console.log('overridableProp', this.overridableProp);
    console.log('childProp', this.childProp);
  }
}

class Child extends Base {
  childProp = 100;
  overridableProp = 57;

  constructor() {
    console.log('Running child constructor');
    super();
    console.log('baseProp (from child)', this.baseProp);
    console.log('overridableProp (from child)', this.overridableProp);
    console.log('childProp (from child)', this.childProp);
  }
}

var baseInst = new Base(); // Prints:
                           //   Running base constructor
                           //   baseProp 42
                           //   overridableProp 43
                           //   childProp undefined

var childInst = new Child(); // Prints:
                             //   'Running child constructor'
                             //   'Running base constructor'
                             //   baseProp 42
                             //   overridableProp 43
                             //   childProp undefined
                             //   baseProp (from child) 42
                             //   overridableProp (from child) 57
                             //   childProp (from child) 100
```
