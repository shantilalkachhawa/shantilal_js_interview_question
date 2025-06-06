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
     
       

    