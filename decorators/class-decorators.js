function annotation(target) {
  // Add a property on target
  target.annotated = true;
}

@annotation
class MyClass {
  // ...
}

MyClass.annotated
  //=> true

const BookCollector = mixin({
  addToCollection(name) {
    this.collection().push(name);
    return this;
  },
  collection() {
    return this._collected_books || (this._collected_books = []);
  }
});

@BookCollector
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

const president = new Person('Barak', 'Obama')

president
  .addToCollection("JavaScript Allongé")
  .addToCollection("Kestrels, Quirky Birds, and Hopeless Egocentricity");

president.collection()
  //=> ["JavaScript Allongé","Kestrels, Quirky Birds, and Hopeless Egocentricity"]

// You can also mix in multiple behaviours with decorators:

const BookCollector = mixin({
  addToCollection(name) {
    this.collection().push(name);
    return this;
  },
  collection() {
    return this._collected_books || (this._collected_books = []);
  }
});

const Author = mixin({
  writeBook(name) {
    this.books().push(name);
    return this;
  },
  books() {
    return this._books_written || (this._books_written = []);
  }
});

@BookCollector @Author
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

// And if you want to use decorators to emulate Purely Functional Composition, it’s a fairly simple pattern:

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

@BookCollector @Author
class BookLover extends Person {};
