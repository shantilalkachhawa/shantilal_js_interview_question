// In an Angular project, these files are part of the built code that the browser loads when you run the app. Here’s a simple explanation for each:

// vendor.js: This file contains all the third-party libraries and dependencies that
//  your app uses (like Angular itself, RxJS, or any other external libraries). It helps keep your code separate from these libraries.

// main.js: This is the main file that contains the code you write for your Angular app. 
// It's where your application logic is bundled.

// Polyfills.js: This file helps your app run in different browsers by filling in features that some older browsers might not support.
// It ensures compatibility across various browsers.

// runtime.js: This file handles the loading and bootstrapping of the Angular app. 
// It makes sure all the necessary modules are loaded properly when the app starts.


// build working flow

// 1 angular.json
//-----  "main": "src/main.ts",

// 2 main.ts
// platformBrowserDynamic().bootstrapModule(AppModule)







// Cold Observable: Starts emitting data only when a subscriber joins; each subscriber gets a new stream.

    // const coldObservable = new Observable(observer => {
    //     console.log('Data fetch ho raha hai...');
    //     observer.next(Math.random());  // Random data emit kar raha hai
    //   });
    
    //   coldObservable.subscribe(value => console.log('Subscriber 1:', value));
    //   coldObservable.subscribe(value => console.log('Subscriber 2:', value));
  
// Hot Observable: Emits data from the moment it's created; all subscribers share the same stream, and late subscribers miss previous emissions.


// const hotObservable = new Subject();  // Subject ek example hai hot observable ka

// hotObservable.subscribe(value => console.log('Subscriber 1:', value));

// hotObservable.next(Math.random());  // Random data emit ho raha hai

// hotObservable.subscribe(value => console.log('Subscriber 2:', value));
// hotObservable.next(Math.random());  // Ek aur random value emit ho rahi hai





// Intercepert 
// providers: [{
//     provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true,
//   }, ApiService],


// import { HttpInterceptorFn } from '@angular/common/http';
// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   let authToken = null;
//   if(typeof window) {
//     authToken = localStorage.getItem('token');
//   }
//   let modifiedReq  =  req.clone({
//     setHeaders: {
//       Authorization: `Bearer ${authToken}`
//     }
//   })
//   return next(modifiedReq);
// };


// Subject and Behavior Subject 

// BehaviorSubject
// A BehaviorSubject is similar to a Subject, but it always stores the ** most recent value ** and immediately sends this value to any new subscribers.
// Subscribers receive the latest value when they subscribe, even if it was emitted before they subscribed.
// You have to initialize a BehaviorSubject with an **initial value**.

// Ex-
// const behaviorSubject = new BehaviorSubject<number>(0); // Initial value = 0
// behaviorSubject.subscribe(value => console.log('Subscriber 1:', value));
// behaviorSubject.next(1); // Subscriber 1 ko value 1 milegi
// behaviorSubject.subscribe(value => console.log('Subscriber 2:', value));
// behaviorSubject.next(2); // Dono Subscriber 1 aur Subscriber 2 ko value 2 milegi
// Ex-
// import { BehaviorSubject } from 'rxjs';
// const settings$ = new BehaviorSubject<AppSettings>({ theme: 'light', language: 'en' });
// // Subscribe to settings
// settings$.subscribe(settings => {
//   console.log('App settings:', settings);
// });
//Update settings
// settings$.next({ theme: 'dark', language: 'fr' });

// Subject
// A Subject is an observable that can emit values to multiple subscribers, but it doesn't keep track of previous values.
// Subscribers only receive values **emitted after they subscribe**. They won't receive any value that was emitted before they subscribed.
// Useful when you don’t care about the previous values, and just want to react to current or future emissions.


// Exaple:-
// const subject = new Subject<number>();
// subject.subscribe(value => console.log('Subscriber 1:', value));
// subject.next(1); // Subscriber 1 ko value 1 milegi
// subject.subscribe(value => console.log('Subscriber 2:', value));
// subject.next(2); // Dono Subscriber 1 aur Subscriber 2 ko value 2 milegi


// Standalone Components: Angular 15 introduced fully standalone components, allowing developers to create components without needing NgModules,
//  simplifying the structure and dependencies of applications.



// 1. Callback:
// A callback is a function that you pass into another function as an argument. The second function 
// (the one you passed the callback to) will "call back" or execute the passed-in function after it finishes its own work.
// ex-
// function readFile(callback) {
//     setTimeout(() => {
//       console.log("File is read");
//       callback();  // Execute the callback after reading the file
//     }, 1000);  // Simulate reading a file with a 1-second delay
//   }
//   function afterReading() {
//     console.log("This is the file content.");
//   }
  
//   readFile(afterReading);  // Pass the callback function
  

// A Promise is a special JavaScript object that represents the eventual completion or failure of an asynchronous operation. 
// It can be in one of three states:

// Pending: The operation is still ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// ex-
// function readFile() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;  // Simulate success or failure
//         if (success) {
//           console.log("File is read");
//           resolve("This is the file content.");  // Operation succeeded
//         } else {
//           reject("Error reading the file.");  // Operation failed
//         }
//       }, 1000);
//     });
//   }
  
    
//   readFile()
//     .then((content) => {
//       console.log(content);  // Handle success
//     })
//     .catch((error) => {
//       console.log(error);  // Handle error
//     });
  


// Callback: You pass a function to another function.
// Promise: It’s an object that eventually returns a result (success or failure) and provides cleaner syntax (then, catch).

// ********
// Diff Lazy loading & eager loading
// Syntex of pipe
// Interceptore
// Module.ts
// View child syntex
// Data shareding without parents and chan
// Flow chart of angular
// what is standalone
// Can a apllication run without modules
// what is app config.ts
// How to subscribe observable and error define 
// what is observable
// Hositing 
// slice and splice
//  view component ref and template ref
// how to use interceptor in module
// why are using bearer in token 
// diff btw can activated and can deactivate
// angular material latest version
// how can check observable has emitted latest value



// https://daily.dev/blog/angular-17-everything-you-need-to-know-in-one-place


// https://tusharghosh09006.medium.com/advanced-angular-interview-questions-d1573f1b350b

// Security: I am very much concern about security. I will use Dom Sanitizer to sanitize input to prevent cross-site scripting (XSS).

// What are some of the differences between a standard Angular component and a standalone component?
// Standard components must be included in an NgModule to be used within an Angular application. 
// Standalone components do not require this and can be used independently without being included in an NgModule.
// Standard components require imports for Angular or third-party functionality to be declared in the NgModule. 
// For instance, *ngFor directive usage necessitates importing CommonModule from @angular/common in the NgModule. 
// In contrast, standalone components can directly import dependencies within their own files.

// Interceptor: I can use HTTP interceptors to intercept outgoing requests and incoming responses. 
// For example I can use interceptor to add token in header.


// This is a important question. There are 8 life cycle hooks in Angular.
//  I have heavily used ngOnInit and ngOnDestroy in my previous work environment. 
//  ngOnInit is called when component initialize. It is called once. Mostly, I used for variable initialize and API call.
//   ngOnDestroy is called before detroying the component. I heavily used for unsubscribe the subscription to prevent the memory leak.

// Several times I have used ngOnChanges, ngAfterContentInit, ngAfterViewInit in my career. 
// ngOnChanges method is called once on component’s creation and then every time changes are detected in one of the component’s input properties.
//  It receives a SimpleChanges object as a parameter. 
//  ngAfterViewInit is called after the component view and its child views has been initialized. 
//  ngAfterContentInit is called after components external content (or from parent ) has been initialized.

// There are other hooks like ngDoCheck, ngAfterContentChecked, ngAfterViewChecked, I did not use them too much.


// What is Dependency Injection?


// Dependency Injection (DI) is a design pattern. DI is heavily used in Angular. 
// DI is a design pattern that aims to manage component dependencies by injecting them from external sources rather than 
// creating them within the component itself. 
// It is use to improved testability, make Components loose coupling.

// By default, Angular’s DI system creates singleton instances of services and shares them throughout the application. 
// In AngularJs, function params are used for DI, From Angular 2, constructor param is used for DI.