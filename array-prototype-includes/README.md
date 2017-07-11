# `Array.prototype.includes`

The Array method includes has the following signature:

```js
Array.prototype.includes(value : any) : boolean
```

It returns true if value is an element of its receiver (this) and false, otherwise:

```js
> ['a', 'b', 'c'].includes('a')
true
> ['a', 'b', 'c'].includes('d')
false
```

includes is similar to `indexOf` – the following two expressions are mostly equivalent:

```js
arr.includes(x)
arr.indexOf(x) >= 0
```

The main difference is that `includes()` finds `NaN`, whereas `indexOf()` doesn’t:

```js
> [NaN].includes(NaN)
true
> [NaN].indexOf(NaN)
-1
```

`includes` does not distinguish between +0 and -0 ([which is how almost all of JavaScript works](http://speakingjs.com/es5/ch11.html#two_zeros)):

```js
> [-0].includes(+0)
true
```

Typed Arrays will also have a method `includes()`:

```js
let tarr = Uint8Array.of(12, 5, 3);
console.log(tarr.includes(5)); // true
```
