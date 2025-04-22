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
Angular sanitizes and removes it to prevent XSS attacks.

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

---

### 15. What is AOT compilation?
AOT (Ahead-of-Time) compiles templates during build time.

**Benefits:**
- Faster load
- Smaller bundle
- Early error detection

---

### 16. What is `sourceMap: true`?
Generates source maps for debugging in browser dev tools.

---

### 17. What is RxJS?
Reactive Extensions for JavaScript – handles asynchronous and event-based programs using Observables.

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

### 40. View Encapsulation
Already covered in Question 8.

