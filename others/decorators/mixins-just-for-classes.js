// It’s very nice that our mixins support any kind of target, but let’s make them class-specific:

function mixin(behaviour, sharedBehaviour = {}) {
  const instanceKeys = Reflect.ownKeys(behaviour);
  const sharedKeys = Reflect.ownKeys(sharedBehaviour);
  const typeTag = Symbol('isa');

  function _mixin(clazz) {
    for (let property of instanceKeys)
      Object.defineProperty(clazz.prototype, property, {
        value: behaviour[property]
      });
    Object.defineProperty(clazz.prototype, typeTag, {
      value: true
    });
    return clazz;
  }
  for (let property of sharedKeys)
    Object.defineProperty(_mixin, property, {
      value: sharedBehaviour[property],
      enumerable: sharedBehaviour.propertyIsEnumerable(property)
    });
  Object.defineProperty(_mixin, Symbol.hasInstance, {
    value: (i) => !!i[typeTag]
  });
  return _mixin;
}

// This version’s _mixin function mixes instance behaviour into a class’s prototype, so we gain convenience at the expense of flexibility:

const BookCollector = mixin({
  addToCollection(name) {
      this.collection().push(name);
      return this;
    },
    collection() {
      return this._collected_books || (this._collected_books = []);
    }
});

class Person {
  constructor(first, last) {
    this.rename(first, last);
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
  rename(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
};

BookCollector(Person);

const president = new Person('Barak', 'Obama')

president
  .addToCollection("JavaScript Allongé")
  .addToCollection("Kestrels, Quirky Birds, and Hopeless Egocentricity");

president.collection()
  //=> ["JavaScript Allongé","Kestrels, Quirky Birds, and Hopeless Egocentricity"]

// But (there’s always a but), our pattern has three different elements (the name being bound, the mixin, and the class being declared). And if we wanted to mix two or more behaviours in, we’d have to nest the functions like this:

const Author = mixin({
  writeBook(name) {
      this.books().push(name);
      return this;
    },
    books() {
      return this._books_written || (this._books_written = []);
    }
});

const Person = Author(BookCollector(class {
  // ...
}));
