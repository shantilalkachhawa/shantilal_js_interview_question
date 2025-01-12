# Is it possible to use Class in Node.js?
Yes
The class syntax
Class expressions:
    // Class expression
    let class_name  = class {
    constructor(method1, method2) {
        this.method1 = method1;
        this.method2= method2;
    }
};

Class declarations:
    // Class declaration
    class class_name {
    constructor(method1, method2) {
        this.method1 = method1;
        this.method2= method2;
    }
}


# life cycle of node JS and Achitecture behind it?
Lifecycle of Node.js program:
    Event loops are something that makes your task very fast and also it perform multitasking. It allows Node.js to perform non-blocking I/O operations.

    call stack:
        LIFO principal
        Global execution context
        Memory allocation
    
    Node API:
        C and C++ inherited functions (Timer functions)
    
    Callback queue:
        Pushed from NODE API
        Pushed to call stack
        Executed

    Example: You have the database and you have to access data from the database or you want to insert something into a database that simply requires some calling of the functions so when you call them it will take some amount of time (maybe nanoseconds or microseconds but it will take some time) so it is not possible for every request that we can wait for that particular time and then we move on to next request so that is where event loop comes into the picture. Your database part will be run in the background and the event loop will be running continuously so that it can handle the need for another request as well.

    Timers: The timer modules in Node.js consists of functions that help to control the timings of code execution. It includes setTimeout(), setImmediate(), and setInterval() methods.

         The setTimeout() method is used to schedule code execution after a designated amount of milliseconds
         We can use the clearTimeout() method to prevent the function from running.
         The setTimeout() method returns the ID that can be used in clearTimeout() method.

         The setImmediate() method is used to execute code at the end of the current event loop cycle. Any function passed as the setImmediate() argument is a callback that can be executed in the next iteration of the event loop.

         The setInterval() method is used to call a function at specified intervals (in milliseconds).
         We can use the clearInterval() method to prevent the function from running. The setInterval() method returns the ID which can be used in clearInterval() method.

         process.nextTick(callback) Method:Whenever a new queue of operations is initialized we can think of it as a new tick. The process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed.


# Write a code to reverse a array, without using any fancy method and creating an empty array?
    let arr = [1,2,3,4,5];
    for(let i = 0; i < Math.round(arr.length/2); i++) {
        [arr[i],arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    console.log(arr[i])
    The Math.round() function returns the value of a number rounded to the nearest integer.

    console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
    // expected output: 6 6 5


# Explain what is Reactor Pattern in Node.js?
    Used to avoid the blocking of the Input/Output operations. 
    It provides us with a handler that is associated with I/O operations. 
    When the I/O requests are to be generated, they get submitted to a demultiplexer, which handles concurrency in avoiding the blocking of the I/O mode and collects the requests in form of an event and queues those events.

    There are two ways in which I/O operations are performed:
        
        Blocking I/O: Application will make a function call and pause its execution at a point until the data is received. It is called as ‘Synchronous’.
        
        Non-Blocking I/O: Application will make a function call, and, without waiting for the results it continues its execution. It is called as ‘Asynchronous’.

        Note: Node.js is Asynchronous in nature.

        Reactor Pattern comprises of:
            https://media.geeksforgeeks.org/wp-content/uploads/20200609214828/Untitled230.png

            Application -> Requests -> Demultiplexer(Concurrent requests: Resource, Operation, Handler) -> Event queue(Event, Handler)
            -> Event loop -> Execute handler



# What is Destructuring assignment for object and array?Write sample code?
In Object
    let obj = { key: "value" }
    let { key } = obj;
    console.log(key) //output: value

In Array
    let arr = [1,2,3,4,5];
    let [a,,c] = arr;
    console.log(a,c) //output: 1,3



# Are you familiar with differences between Node.js modules and ES6 modules?
    Node.js follows the commonJS module system
    it has methods like “require” and “ES6 import and export”

Node.js modules(require)/Commmon JS:                       
    It can be called at any time and place in the program.
    You can directly run the code with require statement.
    If you want to use require module then you have to save file with ‘.js’ extension

ES6 modules:
    It can’t be called conditionally, it always run in the beginning of the file.
    To run a program containing import statement you have to use node --experimental-module app.js.
    If you want to use import module then you have to save file with ‘.mjs’ extension.

# What is N-API in Node.js?
    To make native addons/modules
    Existing natie modules are written c/c++
    With every node release they also need to update version of native module
    With N-API native modules of any version can be used with any node version

# where session data gets stored - Can't we use session in backend
https://hackernoon.com/how-to-use-session-in-nodejs
    Yes we can use session in backend
    npm package: "express-session"
    
    How sessions works:
        When the client makes a login request to the server, the server will create a session and store it on the server-side
        
        When the server responds to the client, it sends a cookie. This cookie will contain the session’s unique id stored on the server, which will now be stored on the client.

        This cookie will be sent on every request to the server. A cookie is a key-value pair that is stored in the browser.

        The browser attaches cookies to every HTTP request that is sent to the server.


# How to avoid Callback Hell in Node.js?
    callback is a function that isn't immediately executed, but is instead passed to another function as a parameter
    every callback takes an argument that is a result of the previous callbacks
    The code structure looks like a pyramid, making it difficult to read and maintain
    if there is an error in one function, then all other functions get affected


    JavaScript provides an easy way of escaping from a callback hell. This is done by event queue and promises
    Promises use .then() method to call async callbacks
    There are also other helpful keywords and methods like async, wait, settimeout() to simplify and make better use of callbacks.


# Name some of the events fired by Streams

    data − This event is fired when there is data is available to read
    end − This event is fired when there is no more data to read
    error − This event is fired when there is any error receiving or writing data
    finish − This event is fired when all the data has been flushed to underlying system


# Explain some Error Handling approaches in Node.js you know about. Which one will you use?
    try-catch block
    Using Promises then & catch block
    
    Using an event listener 
    process.on('uncaughtException', error => {
        // Error Handling
        process.exit(1)
    })

    Error middleware
    function errorHandlerMiddleware(err,req,res,next){}

# What is Stream Chaining in Node?
    Chaining Nodejs Stream: It means connecting the output of one stream with another stream. It is used with piping operations


# What is Piping in Node?
    Piping is the method of transferring data of one stream directly to another with the help of  buffers

# Difference b/w post,put and patch.
    POST : create data
    PUT : update whole resource OR (if the resource does not exist, then API may decide to create a new resource or not)
    PATCH : If you only need to update one field for the resource, you may want to use the PATCH method (Partial update)

# What's the Event Loop?
    event loop allows Node.js to perform non-blocking I/O operations
    Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks
    The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task
    The event loop executes the tasks starting from the oldest first

# What are the global objects of Node.js?
    Global Objects can be used directly in the application which is available without importing any module

    console
    process
    timer functions

# What will be the output of the code?const arrayOfOddNumbers = [1, 3, 5];arrayOfOddNumbers[100] = 199;console.log(arrayOfOddNumbers.length);
    101 (Last Index + 1)


# How many threads does Node actually create?
    --v8-pool-size=num
    If set to 0 then V8 will choose an appropriate size
     If the value provided is larger than V8's maximum, then the largest value will be chosen

# How Node prevents blocking code?
    Event Loop

# Node Js why came into existance?
    To run JS outside of browser. JS was only limited to be executed in HTML with script tag in web apps

# How V8 compiles JavaScript code?
    
    Parsing the code: converts the code into an Abstract Syntax Tree (AST)
        AST: An abstract syntax tree (AST) is a way of representing the syntax of a programming language as a hierarchical tree-like structure. This structure is used for generating symbol tables for compilers and later code generation
    
    Compiling the code:
        Compilation is the process of converting human-readable code to machine code.
        Using an Interpreter: The interpreter scans the code line by line and converts it into byte code. Example: Python
        Using a Compiler: The Compiler scans the entire document and compiles it into highly optimized byte code. Example: Java

        returns byte code

        Bytecode is object-oriented programming (OOP) code compiled to run on a virtual machine (VM) instead of a central processing unit (CPU)

    Executing the code:

        The byte code is executed by using the Memory heap and the Call Stack of the V8 engine’s runtime environment. Memory Heap is the place where all the variables and functions are assigned memory. Call Stack is the place where each individual functions, when called are pushed to the stack, and popped out after their execution.

    Compiler:
        The compiler scans the whole program in one go
        As it scans the code in one go, the errors (if any) are shown at the end together
        The main advantage of compilers is its execution time

    Interpreter:
        Translates the program one statement at a time
        Considering it scans code one line at a time, errors are shown line by line
        Due to interpreters being slow in executing the object code, it is preferred less

# What is the purpose of using hidden classes in V8?
    
    As we all know, JavaScript is a dynamically types language. This means we can add or remove attributes from objects on the fly
    
    However, this approach demands more dynamic lookups, which decreases JavaScript performance.
    
    V8 engines use hidden classes to overcome this issue and optimize the JavaScript execution
    
    When you create a new object, the V8 engine will create a new hidden class for that. Then, if you modify that same object by adding a new property, the V8 engine will create a new hidden class with all the properties from the previous class and include the new property

# What's a stub? Name a use case.
    Stubs are dummy objects for testing
    Mock the resources for writing a use case

# Why we use Async await instead of Promises?
    async & await we write less code
    async & await is more clean and easy to read
    nesting in promises (then catch block)
    error handling


# What is Template literals in node JS?
    backtick ``
    to write multi line string in node JS

# Why to use Buffers instead of binary strings to handle binary data ?
    In binary strings are slower than buffers and chance of execution break and non retrievable

# Does Node.js support multi-core platforms? And is it capable of utilizing all the cores?
    Yes, cluster

# Can Node.js work without V8?
    No, current NODE can not work without v8

# When to use Synchronous vs Asynchronous code in Node.js?
    Synchronous (DB queries, pause the program, wait for some resutl)
    Asynchronous (Background jobs, no output needed)

# What is Map ,reduce &filter
    
    The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array

    The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array

    The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise. In the callback, only the element is required

    The reduce() method reduces an array of values down to just one value

    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce(function (result, item) {
        return result + item;
    }, 0);
    console.log(sum); // 10
    0 => Initial value

# How to solve "Process out of Memory Exception" in Node.js ?
    This error occurs when the memory allocated for the execution application is less than the required memory when run application
    By default the memory limit in Node.js is 512 mb, to solve this issue you need to increasing the memory limit use command —- max-old-space-size.It can be avoid the memory limit issue

# When should I use EventEmitter?
    The EventEmitter class can be used to create and handle custom events module
    real time events listening

# Can Node.js use other engines than V8?
    No

# What's the difference between dependencies, devDependencies and peerDependencies in package.json file?
    
    Dependencies: it consists of all the packages that are used in the project with its version number
        npm install bootstrap

    Dev Dependencies:all the packages that are used in the project in its development phase and not in the production or testing environment with its version number
        npm install bootstrap --save-dev

    Peer Dependencies:
    A peer dependency specifies that our package is compatible with a particular version of an npm package


# Want to extract even number out of this//extract even numbers out of below arrayconst arr = [1,2,3,4,5,6,7,8]---Can you perform it with 
using Async method?
yes, make your function async with async keyword. Call it with await where you want the result.

# What is Stream and what are types of Streams available in Node.js?
    Writable: Stream that is used to write
    Redable: Stream that is used to read
    Duplex: Stream that can be used for both writing and reading
    Transform: Stream that's output is computed based on it's input

# How would you scale Node application?
    Make DB indexes
    Microservices
    Cluster
    Child threades
    Clean code

# What is the difference between process.nextTick() and setImmediate()?
    setImmediate(()=>console.log("Set Immediate")) //at the end of current event loop cycle
    process.nextTick(()=>console.log("Process next tick")) //at start of current event loop cycle

    //Output
    Process next tick
    Set Immediate

# What is REPL in context of Node?
    Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.

    Eval − Takes and evaluates the data structure.

    Print − Prints the result.

    Loop − Loops the above command until the user presses ctrl-c twice.