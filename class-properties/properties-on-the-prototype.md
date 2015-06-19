```js
class MyClass {
  myProp = {someValue: 42};

  getValue() {
    return this.myProp.someValue;
  }
}
```

Desugaring:

```js
class MyClass {
  getValue() {
    return this.myProp.someValue;
  }
}
MyClass.prototype.myProp = {someValue: 42}
```

Oh noes!:

```js
var instA = new MyClass();
var instB = new MyClass();

instA.getValue(); // 42
instB.getValue(); // 42

instA.myProp.someValue = 100;

instA.getValue(); // 100 -- expected
instB.getValue(); // 100 -- wat!?
```
