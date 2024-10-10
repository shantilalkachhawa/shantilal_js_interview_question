// What are the major features of React
// It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
// Supports server-side rendering.
// Follows Unidirectional data flow or data binding.
// Uses reusable/composable UI components to develop the view.


// 2 What is useMemo
// useMemo is a useful hook to prevent unnecessary recalculations, which helps improve the performance of your React app by memoizing results based on dependencies.
// Usage
// Skipping expensive recalculations
// Skipping re-rendering of components
// Preventing an Effect from firing too often
// Memoizing a dependency of another Hook       
// Memoizing a function
// Troubleshooting
// My calculation runs twice on every re-render
// My useMemo call is supposed to return an object, but returns undefined
// Every time my component renders, the calculation in useMemo re-runs
// I need to call useMemo for each list item in a loop, but it’s not allowed


// 3 React features
// Component-Based Architecture
// Reusability: React applications are made up of components, which are small, reusable, and independent pieces of UI
// Separation of Concerns: Components allow you to break down complex UIs into smaller, manageable pieces. This makes code more modular, maintainable, and easier to test.
// Virtual DOM
// Optimized Rendering: Only the components that actually change are re-rendered, which improves performance, especially in large applications.
// Simplified State Management: You don’t need to worry about manually updating the DOM; React automatically updates the UI based on changes in component state and props.
// Unidirectional Data Flow-
// Props and State: Parent components pass data to child components using props, and each component manages its own state.

// 4 useRef 
// Refs in React allow you to directly access DOM elements or React components, providing a way to interact with elements outside of React’s virtual DOM system. They are typically used for managing focus, handling animations, or integrating with third-party libraries. While powerful, refs should be used sparingly and only when necessary, as React's declarative nature is usually sufficient for most UI interactions.

// 5 forwardRef


// forwardRef in React is a function that allows a parent component to pass a ref down to one of its child components. Normally, refs are used to access DOM elements or child components directly from a parent component, but sometimes you may want to pass a ref to a component that wraps other elements or components. This is where forwardRef becomes useful


// 6 Prop drilling 
// Prop drilling in React is the process of passing data, or props, from a parent component to its child components through multiple layers of the component tree
// Disadvatages 
// Performance
// Code complexity
// Code duplication


// 7 Pure Components
// A React component should always have pure rendering logic. This means that it must return the same output if its props, state, and context haven't changed.


// 8 Higer Order Components
// Higher Order Components (HOCs) are a powerful pattern in React for reusing component logic. They are functions that take a component as input and return a new component with enhanced functionality.

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
// Validation and Error Handling: Controlled components offer greater control over validation and error handling, as the parent component can directly manage the input values.

// 10 Uncontrolled Components:

// Managed by DOM: Uncontrolled components have their values managed by the DOM itself.
// Simple Forms: They are often used for simpler forms where validation and error handling are not critical.
// One-Way Data Flow: Changes to the input values are not automatically reflected in the parent component's state.
// Implicit Updates: Updates to the input values occur implicitly when the user interacts with the input.
// Limited Control: Uncontrolled components offer less control over validation and error handling compared to controlled components.


// 11 Callbacks 
// A callback function is a function that is passed as an argument to another function
// Asynchronous Operation,Delayed Execution,Function as Argument

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

// Async/Await: Modern JavaScript introduced the async/await syntax, which provides a more synchronous-like way to work with Promises, making asynchronous code even easier to read and write.
// Promise.all: The Promise.all method allows you to wait for multiple Promises to resolve simultaneously.
// Promise.race: The Promise.race method returns a Promise that resolves or rejects as soon as the first of the input Promises resolves or rejects.


// 13  useMemo and useCallback

// useMemo is a React hook that memoizes the result of a function. It caches the result of the function and returns the cached value on subsequent renders if the dependencies haven't changed.

// Callback Memoization: useCallback is a React hook that memoizes a callback function. It returns a memoized version of the callback function that only changes if the dependencies change

// Best Practices:

// Use useMemo for Expensive Calculations: Use useMemo for calculations that are expensive to compute and don't need to be re-calculated on every render.
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
//  handle loading states and error boundaries within your components. It provides a more elegant and structured way to manage asynchronous operations like data fetching or code splitting.

// 17 Custom Hooks in React JS
// create reusable stateful logic within your component.
// Reusable Logic: Custom hooks allow you to extract common stateful logic from your components and reuse it in multiple places.
// Concise and Readable: Custom hooks can make your code more concise and readable by separating concerns and promoting code reuse.
// Flexibility: Custom hooks can be used with any component, regardless of its structure or complexity.
// Customizable: You can customize custom hooks to fit the specific needs of your application

// 18 which life cycle hooks in class components are replace with use effect

// componentDidMount(): This hook is called after the component is mounted to the DOM. It's equivalent to the first render of the component.
// componentDidUpdate(): This hook is called after the component is updated. It's triggered when the component's props or state change.
// componentWillUnmount(): This hook is called before the component is unmounted from the DOM. It's a good place to clean up any side effects or subscriptions.


// 19 what is strict mode 

// Benefits of Strict Mode:

// Improved Code Quality: Strict Mode helps you write cleaner and more maintainable React code by identifying potential issues early in the development process.
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
// The Virtual DOM is a JavaScript object stored in memory that serves as a lightweight copy of the real DOM. React uses the Virtual DOM to efficiently update the real DOM, which improves performance. The Virtual DOM detects changes and applies only the necessary updates to the real DOM, making React applications faster and smoother

// Lazy loading-
// Lazy loading in React is a technique where components are loaded only when they are needed,
// Lazy loading in React delays the loading of components until they are needed, improving performance.

// Suspense-
// The component might take some time to load, Suspense is used to show a fallback (like a loading spinner or message) while the lazy-loaded component is being fetched 

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
// Ex- Imagine a scenario where an event like window resizing or scrolling is triggered very frequently. Without throttling, the function handling these events may be called hundreds of times in a second, leading to performance issues like a slow or freezing UI. Throttling helps prevent this by limiting the number of times the function is executed.

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

// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
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

// practical clouser ex-

// we two button or more buttons, we want to change bg color to on click so that the we have used clouser
// function clickHandler(color){
//     return function(){
//         document.body.style.backgroundColor = color
//     }
// }
// clickHandler('green')
// clickHandler('red')

// hosting is used to when funtion or varible can be used before declaration.
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

// Event bubbling is the process where an event triggers on the innermost target element first and then successively triggers on ancestors (parents) in the same nesting hierarchy up to the outermost DOM element.

// captering is same oopsite of bulling.

// Event delegation is a technique where you attach  an  event listener to a parent element insted of individual child element.   

// var- function scoped-variable ,reassigned the value.	
// let- block scoped-variable   element ,reassigned the value.
// const- block scoped-variable  element, cannot be reassign the value.


// New Features in ES6
// The let keyword
// The const keyword
// Arrow Functions
// The ... Operator
// For/of
// Map Objects
// Set Objects
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

// null represent absense of any object value while undefined represend absense of value and an unitialized variable .

// prototype property allows you to add new properties or methods to object constructors

// call ,bind ,apply

// splice()
// The  method adds and/or removes array elements.
// The  method overwrites the original array.

//slice()
//  method returns selected elements in an array, as a new array.
//  method selects from a given start, up to a (not inclusive) given end.
//  method does not change the original array.




