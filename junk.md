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



