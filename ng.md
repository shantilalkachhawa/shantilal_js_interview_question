## Angular Advanced Interview Questions and Answers

### 1. What is Angular, and why does Angular use TypeScript?
Angular is a TypeScript-based open-source web application framework developed by Google for building single-page applications (SPAs).

**TypeScript Advantages:**
- Static typing
- OOP features
- Better tooling
- Enhanced maintainability

---

### 2. What is Angular Material?
A UI component library developed by Angular team that follows Material Design principles.

---

### 3. What is a directive, and what are the types?
Directives modify DOM behavior or appearance.

**Types:**
- Component
- Structural (e.g., *ngIf, *ngFor)
- Attribute (e.g., ngStyle, custom directives)

---

### 4. What are the building blocks of Angular?
- Modules
- Components
- Templates
- Metadata
- Services & DI
- Directives and Pipes

---

### 5. What is Dependency Injection (DI)?
A design pattern where components get their dependencies from an injector rather than creating them manually.

DI is a core mechanism that manages and provides dependencies to components, services, and other classes. This promotes loose coupling, modularity, and testability

Dependency Injection (DI) is a design pattern. DI is heavily used in Angular. 
DI is a design pattern that aims to manage component dependencies by injecting them from external sources rather than 
creating them within the component itself. 
It is use to improved testability, make Components loose coupling.
By default, Angular’s DI system creates singleton instances of services and shares them throughout the application. In AngularJs, function params are used for DI, From Angular 2, constructor param is used for DI.

---

### 6. What is data binding, and how many ways can it be implemented?
Data binding connects template and component.

**Types:**
- Interpolation: `{{ value }}`
- Property binding: `[prop]="value"`
- Event binding: `(event)="handler()"`
- Two-way binding: `[(ngModel)]="value"`

---

### 7. Types of filters in Angular (Pipes)
- Built-in: DatePipe, CurrencyPipe, etc.
- Custom pipes
- Pure vs Impure Pipes

---

### 8. What is ViewEncapsulation?
Controls CSS encapsulation for components.

**Types:**
- Emulated
- None
- ShadowDom

---

### 9. Why TypeScript over JavaScript in Angular?
- Compile-time checks
- OOP support
- IntelliSense
- Refactor-friendly

---

### 10. What is RouterOutlet and RouterLink?
- RouterOutlet: Placeholder for routed views.
- RouterLink: Directive to bind anchor tags to router paths.

---

### 11. What happens when you use a `<script>` tag in a template?
Angular sanitizes and removes it to prevent XSS( Cross-site scripting ) attacks.

---

### 12. What is ViewChild and `{static: false}`?
Used to query DOM or child component.
- static: false – available after view init
- static: true – available before view init

---

### 13. Ways to share data between components
- @Input/@Output
- Services
- ViewChild
- Router state
- State management

---

### 14. Angular Lifecycle Hooks
- ngOnInit
- ngOnChanges
- ngDoCheck
- ngAfterContentInit/Checked
- ngAfterViewInit/Checked
- ngOnDestroy

This is a important question. There are 8 life cycle hooks in Angular.
 I have heavily used ngOnInit and ngOnDestroy in my previous work environment. 
 ngOnInit is called when component initialize. It is called once. Mostly, I used for variable initialize and API call.
  ngOnDestroy is called before detroying the component. I heavily used for unsubscribe the subscription to prevent the memory leak.

Several times I have used ngOnChanges, ngAfterContentInit, ngAfterViewInit in my career. 
ngOnChanges method is called once on component’s creation and then every time changes are detected in one of the component’s input properties.
 It receives a SimpleChanges object as a parameter. 
 ngAfterViewInit is called after the component view and its child views has been initialized. 
 ngAfterContentInit is called after components external content (or from parent ) has been initialized.

There are other hooks like ngDoCheck, ngAfterContentChecked, ngAfterViewChecked, I did not use them too much.

---

### 15. What is AOT compilation?
AOT (Ahead-of-Time) compiles templates and component during build time.

**Benefits:**
- Faster load
- Smaller bundle
- Early error detection

---

### 16. What is `sourceMap: true`?
Generates source maps for debugging in browser dev tools.

---


### 17. What is RxJS?

**RxJS** (Reactive Extensions for JavaScript) is a library for **reactive programming using Observables**, allowing you to work with **asynchronous data streams** in a powerful and flexible way.

Angular uses RxJS extensively—especially in handling **HTTP requests, events, routing, form changes, and more**.

---

## 🌟 Key Features of RxJS

| Feature | Description |
|--------|-------------|
| **Observable** | Core building block representing a stream of data/events over time. |
| **Operators** | Powerful functions for transforming, filtering, combining, and managing observables. |
| **Subscription** | Mechanism to start listening to observable data. |
| **Subjects** | Multicasting observable that acts as both observer and observable. |
| **Schedulers** | Control when tasks run (async, queue, animation frame, etc.). |
| **Unsubscription** | Cancels observable stream, useful for memory management (especially on `ngOnDestroy`). |

---

## 🔧 Common Use-Cases in Angular

### 1. **HTTP Requests with `HttpClient`**
```ts
this.http.get('/api/data').subscribe(data => {
  console.log(data);
});
```

### 2. **Reactive Forms (valueChanges)**
```ts
this.form.get('email')?.valueChanges.subscribe(value => {
  console.log('Email changed:', value);
});
```

### 3. **Route Parameters**
```ts
this.route.params.subscribe(params => {
  this.userId = params['id'];
});
```

### 4. **Async Pipe**
In templates to automatically subscribe/unsubscribe:
```html
<div *ngIf="user$ | async as user">
  {{ user.name }}
</div>
```

### 5. **Timer, Intervals, Delays**
```ts
import { timer } from 'rxjs';

timer(2000).subscribe(() => {
  console.log('Fired after 2 seconds');
});
```

---

## 🔁 Common RxJS Operators

| Operator | Use |
|----------|-----|
| **map** | Transform emitted values |
| **filter** | Filter values based on condition |
| **tap** | Perform side effects (e.g., logging) |
| **switchMap** | Cancel previous observable, switch to new one |
| **mergeMap** | Merge multiple observables concurrently |
| **concatMap** | Queue observables sequentially |
| **forkJoin** | Combine final values of multiple observables |
| **combineLatest** | Combine latest values from multiple observables |
| **debounceTime** | Delay emissions, useful for search input |
| **catchError** | Handle errors gracefully |



---

### 18. Promise vs Observable
| Feature | Promise | Observable |
|---------|---------|------------|
| Multiple values | No | Yes |
| Cancelable | No | Yes |
| Lazy | Yes | Yes |
| Operators | No | Yes |

---

### 19. Template vs Reactive Forms
| Feature | Template | Reactive |
|---------|----------|----------|
| Structure | HTML | TS |
| Control | Low | High |
| Testing | Hard | Easy |
| Scalable | No | Yes |

---

### 20. forRoot vs forChild
- forRoot(): Used in root module
- forChild(): Used in feature modules for routing

---

### 21. Handling multiple HTTP requests
- forkJoin
- combineLatest
- zip
- mergeMap/switchMap/concatMap

---

### 22. map vs mergeMap vs switchMap vs concatMap
- map: transforms
- mergeMap: concurrent
- switchMap: cancels previous
- concatMap: sequential

---

### 23. What are class decorators?
Functions applied to classes. Examples:
- @Component
- @Injectable
- @NgModule

---

### 24. What is Component Decorator?
Marks a class as a component and attaches metadata (template, styles, selector).

---

### 25. Bundle Analysis
Use `ng build --stats-json` and tools like webpack-bundle-analyzer to visualize and optimize bundle sizes.

---

### 26. When to use PUT vs PATCH?
- PUT: Replace entire resource
- PATCH: Partial update

---

### 27. Purpose of `angular.json`
Configuration file for project settings – builds, styles, assets, environment, etc.

---

### 28. Angular 17 New Features
- Deferrable views
- @if / @for
- Signal-based reactivity
- Built-in control flow
- Standalone routes

---

### 29. Standard vs Standalone Component
| Feature | Standard | Standalone |
|---------|----------|------------|
| Declaration | NgModule | Self-contained |
| Boilerplate | High | Low |
| Tree-shakable | No | Yes |

---

### 30. What is bootstrapModule?
Starts the application by bootstrapping the root module:
```ts
platformBrowserDynamic().bootstrapModule(AppModule)
```

---

### 31. Angular Testing Framework
- Jasmine
- Karma
- TestBed
- Protractor (deprecated), Cypress, Playwright

---

### 32. Resolvers in Angular
Used to pre-fetch data before route activation.

---

### 33. Guard in Angular
Restricts route access.
Types: CanActivate, CanDeactivate, CanLoad, Resolve, CanMatch

---

### 34. HostBinding and HostListener
- HostBinding: Binds class/style to host element
- HostListener: Listens to host element events

---

### 35. Polyfill in Angular
Used to support older browsers. Configured via `polyfills.ts`.

---

### 36. Can we use multiple RouterOutlet?
Yes. Use named outlets for auxiliary views.

---

### 37. Can I write a component without constructor?
Yes, but DI won’t work without a constructor.

---

### 38. Pure Pipe vs Impure Pipe
- Pure: Runs only when input changes
- Impure: Runs on every change detection cycle

---

### 39. FormBuilder vs FormGroup
- FormGroup: Manual creation
- FormBuilder: Factory to simplify group creation

---


### 1. What is Eager Loading?
Feature modules under Eager Loading would be loaded before the application starts. This is the default module-loading strategy.

### 2. What is Lazy Loading?
Feature modules under Lazy Loading would be loaded on demand after the application starts. It helps to start application faster.

### 3. What is Pre-Loading?
Feature Modules under Pre-Loading would be loaded automatically after the application starts.
### 40. View Encapsulation
Already covered in Question 8.

// https://tusharghosh09006.medium.com/advanced-angular-interview-questions-d1573f1b350b

// Security: I am very much concern about security. I will use Dom Sanitizer to sanitize input to prevent cross-site scripting (XSS).

// What are some of the differences between a standard Angular component and a standalone component?
// Standard components must be included in an NgModule to be used within an Angular application. 
// Standalone components do not require this and can be used independently without being included in an NgModule.
// Standard components require imports for Angular or third-party functionality to be declared in the NgModule. 
// For instance, *ngFor directive usage necessitates importing CommonModule from @angular/common in the NgModule. 
// In contrast, standalone components can directly import dependencies within their own files.

### 40 Interceptor:
 I can use HTTP interceptors to intercept outgoing requests and incoming responses. 
 For example I can use interceptor to add token in header.





// What is Dependency Injection?



1. exec() – Chhoti output ke liye best (buffered output)
js
Copy
Edit
const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
📝 Isme pura output ek baar mein milta hai (as buffer), lekin agar output zyada badi hui to crash ho sakta hai.

2. spawn() – Large ya continuous output ke liye best (streamed output)
js
Copy
Edit
const { spawn } = require('child_process');

const child = spawn('ping', ['google.com']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`Process khatam hua with code ${code}`);
});
✅ Ye real-time output deta hai, jo streaming tasks ke liye best hai.

3. fork() – Jab aap dusra Node.js file/process run karwana chahte ho
js
Copy
Edit
// parent.js
const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'world' });
js
Copy
Edit
// child.js
process.on('message', (msg) => {
  console.log('Parent ne bola:', msg);
  process.send({ response: 'Hi Parent!' });
});
📡 Isme parent aur child process easily message pass kar sakte hain (IPC channel ke through).

4. execFile() – Direct kisi script ya executable ko run karne ke liye
js
Copy
Edit
const { execFile } = require('child_process');

execFile('node', ['--version'], (error, stdout) => {
  if (error) throw error;
  console.log(stdout);
});
🧩 Isme shell launch nahi hota, toh thoda faster aur secure hota hai.

⚡ Use Cases:
Image/video processing (e.g., ffmpeg)

Heavy calculation ko background mein karwana

Python ya C++ scripts ko run karwana

Shell commands automation