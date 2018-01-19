## New features in ES6

### Classes

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

```js
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

### Let/Const

Detailed documentation: - 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
Once, `let` is defined,you can't define it again in the same scope.



Constants `const` are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

```js
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

```

Mostly can be used to declare things you don't to redeclare or change in the scope.

### Array functions

Arrays comes with a lot of in-built methods which are very useful and result
in clearer, performant code.

```js
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);


### ForEach
fruits.forEach(function(item, index, array) {
  console.log(item, index, array);
});

// array could be optional, just use item & index
fruits.forEach((item, index, array) => {
  console.log(item, index, array)
});


fruits.push('Orange');
fruits.pop();

fruits.indexOf('Apple');
```

#### Map

```js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

const map2 = array1.map(function (x) { return(x * 2) });
console.log(map1);
console.log(map2);
// expected output: Array [2, 8, 18, 32]
```


### Arrow functions

More detailed docs: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Older ES5 approach

```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(function (material) {
  return material.length;
}));

```


```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
```

Example Usage in code:

ES5 style
```js
const apiURL = `http://api.socialschools.nl/apiv1/public/1308/post`
fetch(apiURL).then(function (response) {
  return response.json();
}).then(function (json) {
  console.log(json);
});
```

ES6 style
```js
const apiURL = `https://dog.ceo/api/breed/doberman/images`
fetch(apiURL).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
});
```