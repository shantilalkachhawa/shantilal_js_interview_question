// What are the major features of React
// It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
// Real DOM is the actual structure represented in the User Interface and the virtual DOM object is the same as a real DOM object,
// Supports server-side rendering.
// Follows Unidirectional data flow or data binding.
// Uses reusable/composable UI components to develop the view.


// 2 What is useMemo
// useMemo is a useful hook to prevent unnecessary recalculations,
//  which helps improve the performance of your React app by memoizing results based on dependencies.
// Usage
// Skipping expensive recalculations
// Skipping re-rendering of components
// Preventing an Effect from firing too often
// Memoizing a dependency of another Hook
// Memoizing a function
// Troubleshooting
// My calculation runs twice on every re-render
// My useMemo call is supposed to return an object,but returns undefined.
// Every time my component renders, the calculation in useMemo re-runs.
// I need to call useMemo for each list item in a loop, but It’s not allowed.


// 3 React features:-
// Component-Based Architecture
// Reusability: React applications are made up of components, which are small, reusable, and independent pieces of UI
// Separation of Concerns: Components allow you to break down complex UIs into smaller, manageable pieces. This makes code more modular,
//  maintainable, and easier to test.
// Virtual DOM
// Optimized Rendering: Only the components that actually change are re-rendered, which improves performance,
// especially in large applications.
// Simplified State Management: You don’t need to worry about manually updating the DOM; 
// React automatically updates the UI based on changes in component state and props.
// Unidirectional Data Flow-
// Props and State: Parent components pass data to child components using props, and each component manages its own state.

// 4 useRef 
// Refs in React allow you to directly access DOM elements or React components,
//  providing a way to interact with elements outside of React’s virtual DOM system.
//  They are typically used for managing focus, handling animations, or integrating with third-party libraries. 
// While powerful, refs should be used sparingly and only when necessary,
//  as React's declarative nature is usually sufficient for most UI interactions.
// DOM access: Referring to and interacting with DOM elements.
// Storing mutable values: Tracking values that don’t require a re-render.
// Timers and intervals: Managing timers without causing re-renders.
// Previous state or props: Storing previous values of state or props.

// 5 forwardRef


// forwardRef in React is a function that allows a parent component to pass a ref down to one of its child components.
//  Normally, refs are used to access DOM elements or child components directly from a parent component, 
// but sometimes you may want to pass a ref to a component that wraps other elements or components. This is where forwardRef becomes useful


// 6 Prop drilling 
// Prop drilling in React is the process of passing data, or props,
// from a parent component to its child components through multiple layers of the component tree
// Disadvatages 
// Performance
// Code complexity
// Code duplication

// useState	- Manages component state	Form inputs, toggles, counters
// useEffect -	Handles side effects	Fetching data, event listeners
// useReducer - Manages complex state logic	Authentication, forms
// useCallback - Memoizes functions	Preventing unnecessary re-renders
// useContext -	Shares global state	Theme, authentication
// useRef -	References DOM elements, persists values	Focus input, storing previous values



// 7 Pure Components
// A React component should always have pure rendering logic.
//  This means that it must return the same output if its props, state, and context haven't changed.


// 8 Higer Order Components
// Higher Order Components (HOCs) are a powerful pattern in React for reusing component logic. 
// They are functions that take a component as input and return a new component with enhanced functionality.

// Common Use Cases:
// Authentication: Implementing authentication logic for protected routes.
// Data Fetching: Handling data fetching and loading states.
// Error Handling: Managing error handling and displaying appropriate messages.
// Logging: Tracking component interactions and user behavior.
// Internationalization (i18n): Providing localized content based on user preferences.
// Accessibility:


// 9 Controlled Components:
// Managed by React: Controlled components have their values managed directly by React state or props.
// Form Handling: They are commonly used for forms, where the input values are controlled by the parent component.
// Two-Way Data Binding: Changes to the input values are reflected in the parent component's state, and vice versa.
// Explicit Updates: Updates to the input values must be triggered explicitly using setState or by passing new props.
// Validation and Error Handling: Controlled components offer greater control over validation and error handling, 
// as the parent component can directly manage the input values.

// 10 Uncontrolled Components:

// Managed by DOM: Uncontrolled components have their values managed by the DOM itself.
// Simple Forms: They are often used for simpler forms where validation and error handling are not critical.
// One-Way Data Flow: Changes to the input values are not automatically reflected in the parent component's state.
// Implicit Updates: Updates to the input values occur implicitly when the user interacts with the input.
// Limited Control: Uncontrolled components offer less control over validation and error handling compared to controlled components.


// 11 Callbacks 
// A callback function is a function that is passed as an argument to another function
// Asynchronous Operation,Delayed Execution,Function as Argument,hell back

// Common Use
// Event Handling: Attaching event listeners to elements and executing callbacks when the events occur (e.g., click, keypress, mouseover).
// AJAX Requests: Making asynchronous requests to a server and executing a callback function when the response is received.
// Timers: Setting timers (e.g., setTimeout, setInterval) and executing callbacks after a specified delay.
// Promises: Resolving promises and executing callbacks when the promise is fulfilled or rejected.


// 12 Promises

// handle asynchronous code in a more structured and manageable way compared to traditional 
// Three States: A Promise can be in one of three states:
// Pending: The initial state before the operation completes or fails.
// Fulfilled: The state when the operation completes successfully.
// Rejected: The state when the operation fails.

// Benefits of Promises
// Cleaner Code: Promises help write cleaner and more readable asynchronous code compared to callbacks.
// Error Handling: Promises provide a structured way to handle errors and exceptions.
// Chaining: Promises allow for chaining asynchronous operations, making code more sequential and easier to follow.
// Better Control: Promises give you more control over asynchronous operations compared to callbacks.

// Async/Await: Modern JavaScript introduced the async/await syntax, which provides a more synchronous-like way to work with Promises, 
// making asynchronous code even easier to read and write.
// Promise.all: The Promise.all method allows you to wait for multiple Promises to resolve simultaneously.
// Promise.race: The Promise.race method returns a Promise that resolves or rejects as soon as
//  the first of the input Promises resolves or rejects.


// 13  useMemo and useCallback

// useMemo is a React hook that memoizes the result of a function. It caches the result of the function and 
// returns the cached value on subsequent renders if the dependencies haven't changed.

// Callback Memoization: useCallback is a React hook that memoizes a callback function. It returns a memoized version of 
// the callback function that only changes if the dependencies change

// Best Practices:

// Use useMemo for Expensive Calculations: Use useMemo for calculations that are expensive to compute and 
// don't need to be re-calculated on every render.
// Use useCallback for Callbacks: Use useCallback for callbacks that are passed as props to child components or for creating custom hooks.

// 14 Key in react js
// Keys provide a unique identifier for each component within a list.

// 15 Lazy Loading 
// React that involves delaying the loading of components or code until they are actually needed
// Benefits-
// Improved Initial Load Time
// Better User Experience
// Reduced Bundle Size

// 16 Suspense
//  handle loading states and error boundaries within your components. It provides a more elegant and structured way to manage
//  asynchronous operations like data fetching or code splitting.

// 17 Custom Hooks in React JS
// create reusable stateful logic within your component.
// Reusable Logic: Custom hooks allow you to extract common stateful logic from your components and reuse it in multiple places.
// Concise and Readable: Custom hooks can make your code more concise and readable by separating concerns and promoting code reuse.
// Flexibility: Custom hooks can be used with any component, regardless of its structure or complexity.
// Customizable: You can customize custom hooks to fit the specific needs of your application

// 18 which life cycle hooks in class components are replace with use effect

// componentDidMount(): This hook is called after the component is mounted to the DOM. It's equivalent to the first render of the component.
// componentDidUpdate(): This hook is called after the component is updated. It's triggered when the component's props or state change.
// componentWillUnmount(): This hook is called before the component is unmounted from the DOM. 
// It's a good place to clean up any side effects or subscriptions.


// 19 what is strict mode 

// Benefits of Strict Mode:
// Improved Code Quality: Strict Mode helps you write cleaner and more maintainable
//  React code by identifying potential issues early in the development process.
// Reduced Bugs: By detecting potential problems, Strict Mode can help you avoid bugs and errors in your application.
// Enhanced Performance: Some of the warnings emitted by Strict Mode can help you improve the performance of your application.

// Limitations of Strict Mode:
// Development Tool: Strict Mode is intended for development use and should not be used in production environments.
// Not All Issues Detected: Strict Mode cannot detect all potential issues in your React code. It is a tool to help you identify common problems, but it should not be relied upon as a complete solution.



// Context API:

// Purpose: Provides a way to share data between components without prop drilling.
// Scope: Designed for sharing data within a component tree.
// State Management: Handles state management for components within the same context provider.
// Simplicity: Relatively simple to use and understand.
// Performance: Can be less performant than Redux for complex state management.
// Best Use Cases: Sharing data between components within a limited scope, simple state management.

// Redux:
// Purpose: A powerful state management library for complex applications.
// Scope: Can manage global state across the entire application.
// State Management: Centralized state management, making it easier to track and debug state changes.
// Complexity: More complex to set up and use compared to Context API.
// Performance: Generally more performant than Context API for complex state management.
// Best Use Cases: Large-scale applications with complex state management requirements, shared state across multiple components.

// flushSync
// flushSync is a utility function in React that allows you to synchronously update the DOM during a batch of updates.


// Simplicity: If your state management is simple, use useState.
// Complexity: If your state management is complex, consider using useReducer.
// Global State: If you need to manage global state across multiple components, use useReducer with a context provider.




// *********

// virtual Dom and Real Dom 
// The Virtual DOM is a JavaScript object stored in memory that serves as a lightweight copy of the real DOM.
//  React uses the Virtual DOM to efficiently update the real DOM, which improves performance.
//  The Virtual DOM detects changes and applies only the necessary updates to the real DOM,
//  making React applications faster and smoother

// Lazy loading-
// Lazy loading in React is a technique where components are loaded only when they are needed,
// Lazy loading in React delays the loading of components until they are needed, improving performance.

// Suspense-
// The component might take some time to load, Suspense is used to show a fallback (like a loading spinner or message)
//  while the lazy-loaded component is being fetched 

// Error boundaries catch errors in child components and display fallback UI, preventing the whole app from crashing.



// Use useRef for directly DOM manupulating ex we can use from color,validations.

// Use useRef for accessing and interacting with the DOM, or for persisting mutable values.
// It can be used to store a mutable value that does not cause a re-render when updated.


// The useMemo and useCallback Hooks are similar.

// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function
// useMemo Hook only runs when one of its dependencies update.
// useMemo stop calling unnecessary function .



// Use useCallback for memoizing callback functions, particularly when passing them as props to child components.


// forEach is for performing side effects and does not return a new array.
// map is for transforming the array and returns a new array.

// Throttling -
// Throttling is a technique to control how often a function is executed.
// Use cases include handling scrolling, resizing, or any frequently occurring event.
// Ex- Imagine a scenario where an event like window resizing or scrolling is triggered very frequently.
//  Without throttling, the function handling these events may be called hundreds of times in a second, 
// leading to performance issues like a slow or freezing UI.
//  Throttling helps prevent this by limiting the number of times the function is executed.

// function onScroll() {  
//     console.log('Scroll event triggered');
// }

// // Throttle function ko 500ms ka interval denge
// window.addEventListener('scroll', throttle(onScroll, 500));

// function throttle(func, limit) {
//   let lastCall = 0;
  
//   return function(...args) {
//     const now = Date.now();

//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }




// continuous user actions can significantly delay the callback function's execution if we use debounce.
// Difference between Throttling and Debouncing:
// Throttling: Function ko limited interval par run karo, chahe event baar baar trigger ho.
// Debouncing: Function ko sirf event ke stop hone ke baad run karo, ek delay ke baad.ex search

// On the other hand, throttle uses the time delay to execute the callback function at regular intervals until the event trigger is active.

// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
// ex-
// function curriedAdd(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }
// console.log(curriedAdd(1)(2)(3));  // Output: 6


// const addOne = curriedAdd(1);  // a is fixed to 1
// console.log(addOne(2)(3));     // Output: 6
// console.log(addOne(5)(7));     // Output: 13



// CLouser are a function that have  access to varaibles from an outer funnction .
// Closures are functions that remember the lexical scope in which they were defined, 
// allowing them to access variables from that scope even after the outer function has finished executing
// this is lexical scope
// function outer(){
//     let value = 'shantilal'
//     console(innervalue) // not getting  
//     function inner(){
//         let innervalue ='kachhawa'
//         console.log(value);
//     }
//     function innerTwo(){
//         console.log(value);
//     }
// }

// // clouser
// function makFun(){
//     let myVar = 'hello'
//      function innerFun(){
//         console.log(myVar);
//     }
//     return innerFun;
// }
// const value =makFun()
// value();
// Note : fully return laxical scope

// practical clouser ex:-
// We have two  or more buttons, we want to change bg color to on click so that the we have used clouser
// function clickHandler(color){
//     return function(){
//         document.body.style.backgroundColor = color
//     }
// }
// clickHandler('green') 

// clickHandler('red')

// hosting is used to when funtion or varible can be used before declaration.
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during 
// the compile phase. However, only the declarations are hoisted, not the initializations.
// JavaScript behind the scenes function declaration ko upar le jata hai, to sayHello function ko call kiya ja sakta hai pehle.
// JavaScript hoisting me var ko declaration upar le jata hai, par initialization nahi.
// ex-
// console.log(myVar);  // Output: undefined
// var myVar = 10;
// var myVar;           // Hoisted declaration
// console.log(myVar);  // Output: undefined
// myVar = 10;          // Initialization after log

// let aur const variables ko hoist kiya jata hai, lekin wo "temporal dead zone" me rehte hain
// console.log(myLet);  // ReferenceError: Cannot access 'myLet' before initialization
// let myLet = 20;




// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
// function callbackFunction(){
//     console.log('I am  a callback function');
// }
 
// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);

// Event bubbling is the process where an event triggers on the innermost target element first and 
// then successively triggers on ancestors (parents) in the same nesting hierarchy up to the outermost DOM element.

// captering is same oopsite of bulling.

// Event delegation is a technique where you attach  an  event listener to a parent element insted of individual child element.   

// var- function scoped-variable ,reassigned the value.	 
// let- block scoped-variable   element ,reassigned the value.
// const- block scoped-variable  element, cannot be reassign the value.


// New Features in ES6 :-
// The let keyword,
// The const keyword,
// Arrow Functions,
// The ... Operator,
// For/of,
// Map Objects,e
// Set Objects,
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes() 
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Object entries
// JavaScript Modules

// this refers to the object to which the current code context belongs. Its value is determined by how a function is called.
//  current execution context

// const obj = {
//     name: 'pushpendra',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
// obj.greet(); // Output: Hello, pushpendra! 

// null represent absense of any object value while undefined represend absense of value and an unitialized variable .

// prototype property allows you to add new properties or methods to object constructors

// call ,bind ,apply

// call => call allows you to invoke a function with a specified this value and arguments provided individually.

// function greet(age) {
//     console.log(`Hello, ${this.name}, ${age} years old.`);
// }

// const person = { name: 'Pushpendra' };

// greet.call(person, '26'); // Output: Hello, Pushpendra, 26 years old.



// apply => apply is similar to call, but it accepts arguments as an array.

// greet.apply(person, ['26']); // Output: Hello, Pushpendra, 26 years old.



// bind => bind creates a new function with a specified this value and initial arguments. It doesn't immediately execute the function.

// greet.bind(person, ['26'])(); // Output: Hello, Pushpendra, 26 years old
// greet.bind(person, '26')(); // Output: Hello, Pushpendra, 26 years old 


 

// Promises are objects representing the eventual completion or failure of an asynchronous operation. They simplify asynchronous programming,
// offering a cleaner alternative to callback functions.

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         // Asynchronous operation
//         if (success) {
//             resolve(data);
//         } else {
//             reject(error);
//         }
//     });
// };
// Promises provide better control flow and error handling compared to callbacks, 
// avoiding callback hell and enabling easier chaining of asynchronous operations.

// Example using promises
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulating an asynchronous operation
//       setTimeout(() => {
//         const data = 'Some fetched data';
//         resolve(data); // Resolve the promise with the fetched data
//       }, 2000);
//     });
//   }
  
//   // Call fetchData and handle the resolved value using then
//   fetchData()
//     .then(data => {
//       console.log('Processing data:', data);
//     })
//     .catch(error => {
//       console.error('Error occurred:', error);
//     })
// Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time.
// A callback function in JavaScript is a function passed as an argument to another function, to be executed later, 
// often after an asynchronous task completes.

// function fetchData(callback) {
//     setTimeout(function () {
//       const data = "Fetched data";
//       callback(data); // invoking the callback function with the fetched data
//     }, 1000); // Delay of 1 second
//   }
  
//   // Using the callback function
//   fetchData(function (result) {
//     console.log(result); // Output: Fetched data
//   }); 

// Generators are functions that can be paused and resumed, allowing for the generation of a sequence of values lazily. 
// Iterators are objects that implement the Iterable protocol, enabling iteration over collections such as arrays and sets.

// function* generatorFunction() { // Here the * is important
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const iterator = generatorFunction();
// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: ture } 




// EVENT LOOP
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading tasks to the browser's APIs 
// and queuing up events in a loop. This ensures that JavaScript remains responsive to user interactions.


// function task2() {
//     console.log("Task 2");
//     setTimeout(task2, 2000); // Recursive setTimeout to call task2 every 2000ms
// }

// function microtask1() {
//     console.log("Microtask 1");
// }

// function microtask2() {
//     console.log("Microtask 2");
// }

// task1(); // Assuming task1 is defined elsewhere
// task2(); // Calling task2 to initiate its execution

// // Scheduling microtasks using Promise.resolve().then();
// Promise.resolve().then(microtask1); // Schedules microtask1 to be executed as a microtask
// Promise.resolve().then(microtask2); // Schedules microtask2 to be executed as a microtask 

// Synchronous operations are executed sequentially, blocking further execution until they complete, 
// while asynchronous operations allow the program to continue executing while waiting for a response.

// console.log("Start");
// function synchronousTask() {
//   for (let i = 0; i < 3; i++) {
//     console.log("Synchronous Task");
//   }
// }

// synchronousTask();

// console.log("End");

// It will run like:
// Start
// Synchronous Task
// End


// console.log("Start");

// function asynchronousTask() {
//   setTimeout(function() {
//     console.log("Asynchronous Task");
//   }, 2000); // Executes after 2 seconds
// }

// asynchronousTask();

// console.log("End");


// It will run like 
// Start
// End
// Asynchronous Task
 
 
// splice()
// The  method adds and/or removes array elements.
// The  method overwrites the original array.

//slice()
//  method returns selected elements in an array, as a new array.
//  method selects from a given start, up to a (not inclusive) given end.
//  method does not change the original array.


// Map => It's a function that applies another function to all the values in a given array and returns a new array with the modified values.

// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(x => x ** 2);
// console.log(squared); // Output: [1, 4, 9, 16, 25]
// console.log(numbers,'numbers'); // Output: [1, 4, 9, 16, 25]
//  numbers.forEach(x => x + 2);
// // console.log(squared); // Output: [1, 4, 9, 16, 25]
// console.log(numbers,'numbers'); // Output: [1, 4, 9, 16, 25]


// Filter => Create a new array with elements that pass the test implemented by the provided function.

// const num = [1, 2, 3, 4, 5];
// const evens = num.filter(x => x % 2 === 0);
// console.log(evens); // Output: [2, 4]

// Reduce => Apply a function to each element of an array (from left to right) to reduce it to a single value.

// const array = [1, 2, 3, 4, 5];
// const product = array.reduce((x, y) => x * y); // Here the x value will be 0 (default)
// console.log(product); // Output: 120  


// Arrow functions are a concise way to write functions in JavaScript, with implicit return and lexical this. 
// Function expressions define functions as values assigned to variables.

// const square = x => x * x;
// const add = (a, b) => a + b;
// const greet = name => `Hello, ${name}!`;

// // Here is no need to do return

// console.log(square(2));
// console.log(add(2, 4));
// console.log(greet('pushpendra'));


// Rest parameters allow a function to accept an indefinite number of arguments as an array, 
// while spread operators allow an array to be expanded into individual elements.

// function sum(...numbers) {
//     return numbers.reduce((acc, val) => acc + val, 0);
//   }
   
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// // And it is the suitable expmple of spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArray = [...arr1, ...arr2]; // Here we are merging both of arrays
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// function Type
// expression
// declaration
// Anonymous function
// An anonymous function in JavaScript is a function without a name. It is typically used in situations
// where a function is only required once or passed as an argument to other functions.
// Here's an example of how you can use an anonymous function:
 

// A function declaration defines a named function, and it is hoisted, meaning it can be called before it is defined in the code.
// // Function Declaration 
// function greet() {
//     console.log("Hello, World!");
// }

// greet(); // Outputs: Hello, World!

// A function expression is when a function is assigned to a variable. This function can be anonymous or named, and it is not hoisted, meaning it cannot be used before it is defined.
// // Function Expression
// const greet = function() {
//     console.log("Hello, World!");
// };

// greet(); // Outputs: Hello, World


// Event Propagation!
// Capturing Phase (Event Capturing): The event starts from the window (the topmost element)
//  and moves down to the target element (from parent to child).
// Bubbling Phase (Event Bubbling): The event starts from the target element and bubbles up to the window (from child to parent).
// Event delegation: one listener for all <li> elements






// ******************OPPS

// polymerfizm
// Polymorphism, meaning "many forms", is a core concept in object-oriented programming that allows objects of different classes to be treated 
// as objects of a common type. It enables a single action to be performed in different ways, depending on the specific object involved. 
// Think of it as a situation where the same message can lead to different behaviors based on the object receiving the messag
// run time polyfism - use can use on inheritence 
// show error on run time


// complile time polyfism - function loading time we can use
// show error on compile time
// we can use use same function with different-2 purposes  that is complile time polyfism

// Inheritance 
// single level inheritance
// multiple levels inheritance
// hirarchy inheritancetscoo
// hybrid inheritance

// base class/perent class/superclass - child class/subclass
//  one class  inherits properties and behaviors  from another class. It allows for code reuse and the creation of a hierarchy between classes
// get value from the another class inherits properties and behaviors.


// encapsulation - packages/access modifications

// combination of data , function and method  that is call encapsulation
// bundling of data (variables) and methods (functions) that operate on the data into a single unit,

// Abstractions - show user to imporatant item 
// we can use 2 typeof methods  abstract keyword or classes and interfaces
// we can abstract methods,non abstract class
// can not be instantiated (not created objects)

// interface -
// intercae ke constructor nh hote h
// non abstract function nh hota h like nameFoolun(){ }

// interface ko extent nh karte h implements karte h 
// interface nameOfInterface {
//     nameFun(): void; 
//     nameFun(){

//     //  }wrong
// }
// like class Horese implement nameOfInterface {

// }
// NOTE:-  multiple  inheritance only  use to in interface not class 
// *******************************************************************new **************************************************************************

// React Performance Optimization Techniques

//1 Use React.memo for Component Memoization

// When a component's output depends only on props and doesn't need frequent updates
// import React from 'react';

// const Button = React.memo(({ label, onClick }) => {
//     console.log("Button rendered");
//     return <button onClick={onClick}>{label}</button>;
// });

// export default Button;

//2 Use useCallback and useMemo Hooks
// When passing functions to child components to avoid unnecessary re-creation.
// import React, { useState, useCallback } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increment = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, []);

//     return <button onClick={increment}>Count: {count}</button>;
// };

// export default Counter;


//3 Code Splitting with React.lazy and Suspense
// Break the application into smaller bundles to reduce initial load time.


// import React, { lazy, Suspense } from 'react';

// const HeavyComponent = lazy(() => import('./HeavyComponent'));

// const App = () => (
//     <Suspense fallback={<div>Loading...</div>}>
//         <HeavyComponent />
//     </Suspense>
// );

// export default App;

// 4. Avoid Inline Functions and Object Creation in JSX
// Bad
{/* <button onClick={() => console.log('Clicked!')}>Click</button>

// Good
const handleClick = () => console.log('Clicked!');
<button onClick={handleClick}>Click</button> */}

// 5. Optimize Rendering with Key Prop in Lists [when during of map method]
// Always provide a unique key prop when rendering lists to help React identify changes efficiently.


// 6. Avoid Unnecessary State and Props
// Unnecessary state
// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     return <Dashboard isLoggedIn={isLoggedIn} />;
// };

// // Better approach using context or conditional rendering
// const App = () => {
//     return <Dashboard />;
// };



// 7. Use Context API Wisely
// Avoid overusing context as it can lead to propagation of re-renders.
// Use tools like Zustand, Recoil, or Jotai for state management when Context becomes complex.
// 8. Enable Lazy Image Loading (Next.js Example)
// Benefit: Prevents loading all images at once, improving performance.


// QUE
// console.log(this) 
// Global Scope (Browser)
// --In a browser, this refers to the global object, which is window.
// Inside a Function (Non-Strict Mode)
// --In non-strict mode, this still refers to the global object (window in browsers, global in Node.js).
// ---EX - in browser Window {...} & node js Object [global] {...}

// Inside a Function (Strict Mode)
// --In strict mode, this will be undefined.
//  Inside an Object Method
// --Here, this refers to obj, because the function is a method of obj.

//QUE 
// How does "this" behave in Node.js? Is it the same as in a browser console?
// In Node.js, this in the global scope refers to an empty object {}, not global.
// this Inside a Function -In Node.js, calling a regular function in non-strict mode sets this to the global object (global). 
// In strict mode ("use strict"), this is undefined
// In a browser, this in the global scope refers to the window object.
// Conclusion
// this behaves differently in the global scope in Node.js ({}) vs. browsers (window).
// Inside functions, this refers to global in Node.js, while in browsers, it's window.
// Arrow functions inherit this from the surrounding scope in both environments.
// Inside a module, this in Node.js refers to module.exports.


// Que 
// If you receive 5000 records in one API call, how would you efficiently display them in a dropdown?
// - 1. Use Virtual Scrolling (Lazy Rendering)
// 2. Implement Search & Filtering
// 3. Pagination or Infinite Scrolling
// 4. Asynchronous Dropdown Loading

// In package.json, the caret (^) and tilde (~) are version specifiers that define how updates are handled when installing dependencies
// - 1. Caret (^) - Allows Minor and Patch Updates
//    ex- Installs 4.17.21 or any newer minor or patch version like 4.18.0 or 4.17.30,  Does NOT install 5.x.x (major version change).
// 2. Tilde (~) - Allows Only Patch Updates
//    ex- Installs 4.17.21 or any newer patch version like 4.17.30,Does NOT install 4.18.0 or 5.x.x (no minor or major updates).


// Que Write code for mul(2)(3)(4) = 24  Curried Function
// function multi(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// console.log(multi(2)(3)(4))
// const add = a => b => c=>a*b*c; Arrow Function
// console.log(add(2)(3)(4))

// QUE
// Have you worked with Axios? What are interceptors in Axios?
// Yes, I have worked with Axios! It’s a popular HTTP client used to make requests from a web browser or Node.js environment. 
// Axios is great for interacting with APIs due to its simplicity and support for handling requests and responses.

// Interceptors in Axios are functions that allow you to modify the request or response before it is sent or after it is received, respectively.
//  They are useful for adding functionality like logging, authentication, error handling, or transforming the data.


// QUE
// What are synthetic events in react ?
// Common Synthetic Event Methods and Properties
// event.preventDefault():
// Prevents the default action associated with the event (e.g., preventing form submission, link navigation).
// event.stopPropagation():
// Prevents the event from bubbling up to parent elements (stops the event from propagating).
// event.target:
// The DOM element that triggered the event (similar to the native event.target).
// event.currentTarget:
// The DOM element that the event handler is currently attached to (this is useful in event delegation).
// event.type:
// The type of the event (e.g., click, submit, change).
// event.persist():
// Call this method to remove an event from the React event pool. This allows you to access the event properties asynchronously,
//  for example, after a setTimeout or when handling a promise.
// Types of Events in React:
// React’s synthetic event system works with various types of events, such as:

// Mouse Events: onClick, onDoubleClick, onMouseEnter, onMouseLeave, etc.
// Keyboard Events: onKeyDown, onKeyUp, onKeyPress, etc.
// Form Events: onChange, onSubmit, onFocus, onBlur, etc.
// Focus Events: onFocus, onBlur, etc.
// Touch Events: onTouchStart, onTouchMove, onTouchEnd, etc.
// Clipboard Events: onCopy, onPaste, etc.
// Media Events: onPlay, onPause, onVolumeChange, etc.

// Advantages of Synthetic Events:
// Cross-Browser Consistency: Since Synthetic Events normalize event behavior, you don’t have to worry about handling browser-specific issues.
// Event Delegation: React handles the delegation of events, 
// making it easier to manage event listeners, especially in applications with many dynamic components.
// Performance: Synthetic Events improve performance by reusing event objects and reducing the number of event listeners in the DOM.
// Cleaner Code: Since React abstracts away browser inconsistencies, you can focus on writing cleaner and more reliable code for event handling.

// QUES
// Disadvantages of Prop Drilling
// Difficult to Maintain:
// Increased Complexity:
// Unnecessary Renders:
// Low Reusability:
// Hard to Debug:
// Limited Flexibility:


// Diff btw varibles & function 
// Purpose: A variable stores data, while a function performs actions or computations.
// Action: A variable can hold a value that can change, while a function can take inputs, process them, and return results.
// Usage: Variables are used to store and retrieve data, and functions are used to group reusable logic.

// Advantages of hooks and customs hooks
// React Hooks:

// Simplify state management and side effects in functional components.
// Make code more readable and maintainable.
// Eliminate the need for class components.
// Improve performance and reduce boilerplate.
// Custom Hooks:

// Encapsulate reusable logic for cleaner code.
// Allow easy sharing of stateful logic and side effects across components.
// Improve separation of concerns.
// Reduce prop drilling and make testing easier.

// Differences Functional Components & Class Components
// Functional
// A simple JavaScript function returning JSX
// With useState (hooks)
// With useEffect (hooks)
// Generally more efficient (lightweight)
// Simpler syntax, more concise
// Fully supports hooks (useState, useEffect, etc.)
// No this keyword
// With useContext and useRef (hooks)

// Class Components
// A class extending React.Component
// Using this.state and this.setState
// componentDidMount, componentWillUnmount, etc.
// May have more overhead due to class structure
// More verbose and complex
// Does not support hooks
// Requires this keyword to access state and props
// Using this.context and this.refs


// Diff btw Memoization (General) & useMemo (React Hook)
// Memoization-
// Scope - General programming concept
// Use Case - Optimize expensive function calls.
// Storage	- Can store data globally or locally.
// Trigger for Recalculation - Usually based on function input
// Example Usage- Fibonacci calculation, caching API calls.

// useMemo (React Hook) -
// Scope - React-specific implementation.
// Use Case - Optimize performance in React components.
// Storage	- 	Stores computed values within the React component.
// Trigger for Recalculation - Depends on the dependency array
// Example Usage- Preventing unnecessary re-renders in React


// Dispatchers in Redux
// What is a Dispatcher?
// The dispatcher is a mechanism that sends actions to the store.
// In Redux, store.dispatch(action) is the way to trigger a state update.

// How it Works:

// A component or middleware dispatches an action.
// The store receives the action and passes it to the reducer.
// The reducer processes the action and returns the updated state.
// The store updates the state and notifies subscribed components.





// Set, WeakSet, and WeakMap in JavaScript
// JavaScript provides Set, WeakSet, and WeakMap for handling collections of unique values and key-value pairs efficiently.
// When to Use What?
// Use Set when you need a collection of unique values.
// Use WeakSet when you need a set of objects that should be garbage collected.
// Use WeakMap when you need key-value pairs where keys should be garbage collected.
// Set (Unique Collection of Values)-
// What is it?
// A Set is a collection of unique values.
// Can store any data type (primitive or object).
// Maintains insertion order.
// 🔹 Methods
// Method	Description
// add(value)	Adds a new value to the Set
// delete(value)	Removes a value
// has(value)	Checks if the value exists
// size	Returns the number of elements
// clear()	Removes all values

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2); // Duplicate values are ignored
// console.log(mySet); // Set { 1, 2 }

// console.log(mySet.has(1)); // true
// console.log(mySet.size); // 2

// mySet.delete(1);
// console.log(mySet); // Set { 2 }

// mySet.clear();
// console.log(mySet); // Set {}


// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]


// WeakSet (Collection of Objects)
// ✅ What is it?
// A WeakSet is similar to Set, but only stores objects.
// Objects are stored weakly (garbage-collected if no references exist).
// Cannot be iterated (forEach, size, values() don’t work).
// 🔹 Methods
// Method	Description
// add(value)	Adds an object
// delete(value)	Removes an object
// has(value)	Checks if an object exists

// const obj1 = { name: "Alice" };
// const obj2 = { name: "Bob" };

// const weakSet = new WeakSet();
// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // true

// weakSet.delete(obj1);
// console.log(weakSet.has(obj1)); // false

// WeakMap (Key-Value Pairs with Weak Keys)
// ✅ What is it?
// A WeakMap is like a Map, but keys must be objects.
// The keys are weakly held (automatically removed if no references exist).
// Cannot be iterated (forEach, size, keys() don’t work).
// 🔹 Methods
// Method	Description
// set(key, value)	Sets a key-value pair
// get(key)	Retrieves a value
// delete(key)	Removes a key-value pair
// has(key)	Checks if a key exists
// const weakMap = new WeakMap();

// let obj = { id: 1 };
// weakMap.set(obj, "User Data");

// console.log(weakMap.get(obj)); // "User Data"

// weakMap.delete(obj);
// console.log(weakMap.has(obj)); // false


// AngularJS, developed by Google, is an open-source structural framework used to build dynamic web apps, 
// while ReactJS, developed by Facebook, is an open-source library that allows you to build UI components.
// ReactJS is a lightweight library that helps you build UI components with a virtual DOM and JSX syntax, 
// whereas Angularis a comprehensive framework that offers multiple features like two-way data binding, 
// TypeScript support, MVC architecture, and dependency injection.
// React JS is a JavaScript-based library, whereas Angular is a TypeScript-based web application framework
// Angular is best suited for complex, enterprise-level applications that require a structured framework, 
// while React.js is ideal for dynamic, high-performance single-page applications (SPAs) requiring fast updates and scalability.
// While talking about React JS vs Angular, Angular is a JS framework built using TypeScript, whereas React JS is a JS library built using JSX.
// React.js is mostly used to build interactive UI components with frequently variable data, 
// whereas Angular.js is used to build complex enterprise apps like progressive web apps and single-page apps.
// While comparing Angular JS vs React JS, Angular JS is used to build single-page applications using HTML and TypeScript. 
// React JS is commonly used to create user interfaces for single-page applications from isolated components.

 
// except that it is a lightweight copy.
// https://www.geeksforgeeks.org/difference-between-virtual-dom-and-real-dom/


// System Design is the process of designing the architecture, components, and interfaces for a system so that it meets the end-user requirements. 
// This specifically designed System Design tutorial will help you to learn and 
// master System Design concepts in the most efficient way from basics to advanced level.

// setImmediate() schedules a callback function to be executed in the next iteration of the event loop.
// setTimeout() schedules a callback function to be executed after a specified delay.
// process.nextTick() schedules a callback function to be executed immediately after the current operation completes, 
// before the event loop continues.




// Flux is an architectural pattern introduced by “Facebook” to work with React. 
// It is a slight modification of the observer-observable pattern and it is not a library or a framework. The main feature in Flux is the concept of uni-directional data flow.


// Async and differ in js; 
// Flux is an architectural pattern introduced by “Facebook” to work with React. 
// It is a slight modification of the observer-observable pattern and it is not a library or a framework. 
// The main feature in Flux is the concept of uni-directional data flow.


// Event loop - Pushes the task form the callback Que to call Stack, and execution one by one.