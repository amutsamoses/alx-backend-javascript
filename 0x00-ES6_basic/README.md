<!DOCTYPE html>
<html>

<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }

    h1 {
      color: #007bff;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
    }

    h2 {
      color: #009688;
    }

    h3 {
      color: #4caf50;
    }

    code {
      background-color: #f8f8f8;
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 0.95em;
    }

    pre {
      background-color: #f8f8f8;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow-x: auto;
    }

    pre code {
      display: block;
    }

    p {
      margin: 15px 0;
    }

    ul {
      padding-left: 30px;
    }
  </style>
</head>

<body>
  <h1>0x00. ES6 Basics</h1>

  <p>Welcome to the ES6 Basics Readme! This guide will introduce you to the fundamental concepts of ECMAScript 6 (ES6),
    the sixth edition of the ECMAScript standard, which is a core scripting language used for web development. ES6 introduced
    numerous enhancements and new features to make JavaScript code more concise and expressive. This Readme will cover the
    key ES6 features with code snippets to help you understand and implement them in your projects.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#let-and-const">let and const</a></li>
    <li><a href="#arrow-functions">Arrow Functions</a></li>
    <li><a href="#template-literals">Template Literals</a></li>
    <li><a href="#spread-operator">Spread Operator</a></li>
    <li><a href="#destructuring-assignment">Destructuring Assignment</a></li>
    <li><a href="#classes">Classes</a></li>
    <li><a href="#modules">Modules</a></li>
  </ul>

  <h2 id="let-and-const">1. let and const</h2>
  <pre><code>
// Using let
let count = 10;
if (true) {
  let count = 20; // This creates a new variable with block scope
  console.log(count); // Output: 20
}
console.log(count); // Output: 10

// Using const
const PI = 3.14159;
// PI = 3.14; // This will result in an error since you cannot reassign a constant.
  </code></pre>

  <h2 id="arrow-functions">2. Arrow Functions</h2>
  <pre><code>
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
  </code></pre>

  <h2 id="template-literals">3. Template Literals</h2>
  <pre><code>
const name = 'John';
const age = 30;

// Without template literals
console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// With template literals
console.log(`My name is ${name} and I am ${age} years old.`);
  </code></pre>

  <h2 id="spread-operator">4. Spread Operator</h2>
  <pre><code>
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
  </code></pre>

  <h2 id="destructuring-assignment">5. Destructuring Assignment</h2>
  <pre><code>
// Destructuring arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Destructuring objects
const person = { firstName: 'Alice', lastName: 'Smith' };
const { firstName, lastName } = person;
console.log(firstName); // Output: Alice
console.log(lastName); // Output: Smith
  </code></pre>

  <h2 id="classes">6. Classes</h2>
  <pre><code>
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks loudly.`);
  }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Output: Buddy barks loudly.
  </code></pre>

  <h2 id="modules">7. Modules</h2>
  <pre><code>
// In file math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// In another file main.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
  </code></pre>

  <h2>Conclusion</h2>
  <p>Congratulations! You've covered the basics of ES6, a powerful addition to the JavaScript language. These features will
    significantly enhance your ability to write modern, concise, and maintainable code in your web development projects.
    Feel free to explore further and dive deeper into ES6 and beyond! Happy coding!</p>
</body>

</html>

