# myapp
Basic Node.js API for transactions on a products database

<b>Intro to Node.js</b>

<b>What is Node?</b>
-	JavaScript runtime
-	Built on Chrome’s V8 JavaScript engine
-	Event-driven, asynchronous (non-blocking)
-	Designed to build scalable network applications
-	JavaScript execution in Node.js is single threaded

From <a href="http://www.nodejs.org">nodejs.org</a>:
-	"Concurrency refers to event loop's capacity to execute JavaScript callback functions after completing other work."
-	"The event loop is different than models in many other languages where additional threads may be created to handle concurrent work."

<b>What is Express?</b>
- A Node.js framework

- Allows us to
  - Set up middleware to respond to HTTP requests.
  - Define a routing table
  - Dyamically render HTML pages based on passing arguments to templates.

- Express application uses a callback function whose parameters are request and response objects
- Routing means determining how an application responds to a client request to an endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on)




Creating an API for my AngularJS app

References:
https://nodejs.org/en/about/
https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
