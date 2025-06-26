# HTTP
 Transfer protocol for  transforming  data over the web .
 Its operate over port 80
 Data transmited over HTTP is not encrypted

 # HTTPS 
  Secure version of HTTP that uses encreption to protect  during transmition 
  Its operate over port 443
  HTTP encrypts data using SSL(Secure Socket layer ) and TSL (Transport layer security)

  Encryption (2 types )- 
    1. Symetric key - enc & dec both are use in same key
        Faster and more effiecent ,suitable for large data & challenging for distribution 
    2. Asymentric key - 
        Slower ,suitable for small data  & simplifeid key distribution, secure even if publi key is secure. 
       a).Pub -  Only enc
       b).Private - Only Dec 
    3. Hybrid Encreption 
# How to work SSL
  signature = server pub_key + authority pub_key(Certifiacte authority)
  Send the certificate  to client for verify then encrypt data
 
# Status code -
  1st line of response, Indicating the result of request, Divide into 5 Group.
  # 1XX -Informational code 
    100 - Continue
     Continue the connection for receiving  complete message body using request.
  # 2xx - Request was successful 
    200- Ok
     request was successfull and the response of body 

    201- Created 
      Is returned in response to the PUT Request
  # 3xx - The cliet is redirect to a different resource
    301- Move parmanently
        Redirect to differnet URL, using Location header (Use New Url).
    302- Found 
         same the above but (Revert to the  Original URL in subsequent request )
    304 - Not modifed 
         Instruct the browser  to use its cached copy of the request resource.(If modify-since & If none match)
    
  # 4xx - The Request conatined an error of some kind 
    400 - Bad Request
         Client submitted invalid HTTP Request
    401 - unauthorized
        Server require authentication 
    403 - Forbiden 
         authentication but no permision for request
    404- Not Found 
        Request resource doesnot exist
    405 - Method not allowd
         Method used in the request not support 
    413 - Request entity to large
         Body of your request too large  ( buffer overflow)
    414 - Request url is too long
 # 5xx - The server encoutered an error fullfiling the request
    500 - Internal server
        Server encoutring specifice error fulfilled
        
    503 - Service unavilabe 
     
       

# Virtual DoM
Virtual Dom is nothing but copy of real DOM 
Create a new Dom then change 
Behind the sence react use fiber algorithm.
While using the diiffing algo then patch changes to update on real dom ,
(Once in React known somthing has changes then react update those and only those object on the real dom)
DOM SAYS- I have no idea what changed so i will rerender everything and see's what diffrent now .

# Reconciliation
It is a recursion algorithm
The algorithm React uses to diff one tree with another to determine which parts need to be changed.(Actual tree & browser tree)
# Shadow Dom 
 Shadow DOM let us  create a custom components or in others word create a scope DOM tree inside  our element.
 like video tag

# which one better React or Angular.
# React -
  ✅ Advantages:
     Flexibility- you want using additional libraries (e.g., Redux, React Router).
     Component-Based: React’s reusable components make UI development fast and organized.
     Performance: Efficient virtual DOM and faster re-rendering.
  Limitations - 
     Too much freedom: It doesn’t provide a fixed project structure, which can lead to inconsistencies across teams if not carefully managed.
     Boilerplate with state management: Complex state (Redux or context) often increases code and learning overhead.
     SEO (before Next.js): React SPAs initially had poor SEO capabilities unless SSR (like Next.js) was used.


# Angular - 
   Complete Framework: Comes with everything built-in – routing, HTTP client, forms, validation, dependency injection, etc.
   TypeScript by default: Type safety, auto-complete, and tooling support are great for large-scale enterprise applications.
   Strong Architecture: Enforces structure (MVC), scalable codebase, and clean separation of concerns.
   Tooling: Angular CLI is extremely powerful for scaffolding, testing, and building apps.
   Two-Way Data Binding: Useful in form-heavy or real-time data applications.
   
   Limitations:
    Steeper Learning Curve: Concepts like decorators, RxJS (observables), modules, and dependency injection take time to master.
    Verbose Code: More boilerplate compared to React; development feels heavy for small projects.
    Performance (in large DOMs): Might need optimization for change detection in large apps.

# Promises- 





    | Method                 | Kaam kya karta hai (Hinglish)                                              |
| ---------------------- | -------------------------------------------------------------------------- |
| `Promise.all()`        | Sabhi promises complete ho to result dega, ek bhi fail ho to reject karega |
| `Promise.allSettled()` | Sabhi ka result dega, chahe success ya fail                                |
| `Promise.race()`       | Jo sabse pehle complete ho (success/fail), wahi return hoga                |
| `Promise.any()`        | Jo pehla success ho, wahi return; sab fail ho to error                     |
| `Promise.resolve()`    | Ek resolved promise banata hai kisi value se                               |
| `Promise.reject()`     | Ek rejected promise return karta hai  
                                     |

🔹 1. Promise.all()
Definition:
Promise.all() ek method hai jo multiple promises ko ek sath run karta hai aur tabhi resolve hota hai jab sabhi promises successfully complete ho jayein. Agar ek bhi promise reject ho gaya to ye pura reject ho jata hai.

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then(result => {
//     console.log(result,'All'); // [10, 20, 30]
// });

🔹 2. Promise.allSettled()
Definition:
Promise.allSettled() method sabhi promises ke result ka wait karta hai, chahe wo resolve ho ya reject. Ye hamesha array return karta hai jisme har promise ka status (fulfilled ya rejected) aur uska value ya reason hota hai.
  
// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failed");

// Promise.allSettled([p1, p2]).then(results => {
//   console.log(results);
// });

🔹 3. Promise.race()
Definition:
Promise.race() un promises me se jo pehle complete hota hai (resolve ya reject), usi ka result return karta hai. Baaki promises ko ignore kar deta hai.

// const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 200));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 100));

// Promise.race([p1, p2]).then(result => {
//   console.log(result); // "First"
// });

🔹 4. Promise.any()
Definition:
Promise.any() un sabhi promises me se jo pehla successfully resolve hota hai, usi ka result return karta hai. Agar sabhi promises reject ho jayein, to ye AggregateError deta hai.

// const p1 = Promise.reject("Error1");
// const p2 = Promise.resolve("Success");
// const p3 = Promise.reject("Error3");

// Promise.any([p1, p2, p3]).then(result => {
//   console.log(result); // "Success"
// });


🔹 5. Promise.resolve()
Definition:
Promise.resolve() kisi bhi value ko ek resolved promise me convert karta hai. Iska use synchronous value ko promise ke form me wrap karne ke liye hota hai.

// const p = Promise.resolve("Resolved value");
// p.then(res => console.log(res)); // "Resolved value"

🔹 6. Promise.reject()
Definition:
Promise.reject() kisi bhi reason ke saath ek rejected promise create karta hai. Ye mostly error handle karne ke use cases me use hota hai.


// const p = Promise.reject("Something went wrong");
// p.catch(err => console.log(err)); // "Something went wrong"



let arr = [1,2,[3,4]]
// let copyArr = arr
// let copyArr = [...arr]; //shasllow coppy
let copyArr = JSON.parse(JSON.stringify(arr)) // deep coppy
// copyArr.push(5); 
copyArr[2].push(5)
console.log(arr,'main Arr');
console.log(copyArr,'copy Arr')



# var, let, const in JavaScript - 
-> Declare variables in JavaScript

    Function-scoped (NOT block-scoped).
    Hoisted with initialization to undefined.
    Can be redeclared and updated.
# Var 
  # Hoisting with var
    console.log(a); // undefined
    var a = 10;
  #  Function Scope
  function test() {
    if (true) {
      var x = 100;
    }
    console.log(x); // ✅ 100
  }
  test(); 
  # Redeclaration Allowed
  var a = 10;
  var a = 20; // ✅ Allowed
  console.log(a); // 20

# Let
      Block-scoped.
      Hoisted but not initialized → leads to Temporal Dead Zone (TDZ).
      Can be updated but not redeclared in the same scope.
    
  # Block Scope

      if (true) {
      let x = 10;
    }
    console.log(x); // ❌ ReferenceError
  # No Redeclaration
    let a = 5;
    let a = 10; // ❌ SyntaxError: Identifier 'a' has already been declared

  # TDZ (Temporal Dead Zone)
    console.log(a); // ❌ ReferenceError
    let a = 10;

# Const
 
    Block-scoped like let.
    Hoisted but not initialized (TDZ applies).
    Cannot be reassigned or redeclared.
    For objects and arrays, values can be mutated (but reference cannot change).
  # Cannot Reassign
   const a = 10;
   a = 20; // ❌ TypeError: Assignment to constant variable

  # Object Mutation is Allowed
    const user = { name: "Shantilal" };
    user.name = "Kachhawa"; // ✅ Allowed
    console.log(user.name); // Kachhawa
  # Array Mutation
    const arr = [1, 2, 3];
    arr.push(4); // ✅ Allowed
    console.log(arr); // [1, 2, 3, 4]


  # No Redeclaration
   const a = 10;
   const a = 20; // ❌ SyntaxError


🔹 1. What is a Mono-repo?
✅ Definition:
A Mono-repo (monolithic repository) is a single code repository that contains multiple projects or packages (e.g., frontend, backend, shared libraries) — all living together in the same Git repository.


🔹 2. What is a Multi-repo?
✅ Definition:
In a Multi-repo setup, each service, project, or package lives in its own separate Git repository.

🧪 Example (Node.js Project):
You have separate repos like:
frontend-app/ → React/Next.js
backend-api/ → Node.js API
shared-utils/ → NPM package used by both


# What is socket.io?
✅ Definition:
Socket.IO is a JavaScript library built on top of WebSockets (but not limited to them).
It provides an event-based API and fallback support (like long polling) to ensure real-time communication even if WebSocket is not supported.

📌 Think of Socket.IO as:

"WebSocket + reconnect + fallback + rooms + broadcasting + easy events"
Socket communication is often built using WebSockets protocol.


# Common Events in socket.io
| Event        | Description                       |
| ------------ | --------------------------------- |
| `connection` | When a client connects            |
| `disconnect` | When a client disconnects         |
| `emit()`     | To send data                      |
| `on()`       | To receive/listen to events       |
| `broadcast`  | Send message to all except sender |






#  How Socket Works (Step by Step)
1. Client connects to server via socket
2. Server listens for connections
3. Both can emit and listen to messages continuously
4. Connection stays open until manually closed or disconnected
📌 Unlike HTTP, socket doesn't need to request-response each time.


# 1. What is WebSocket?
✅ Definition:
WebSocket is a protocol (like HTTP or FTP) that enables full-duplex, two-way communication between the client and the server over a single, persistent connection.

📌 Example Use Case:
Chat, games, stock tickers, real-time updates.

const ws = new WebSocket('ws://localhost:3000');
ws.send("Hello Server!");


Q: What's the difference between WebSocket and socket.io?
A: WebSocket is the protocol. socket.io is a library that uses WebSocket under the hood, and provides:
  Reconnection
  Fallbacks
  Rooms/namespaces
  Events API


















