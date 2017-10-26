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
- Routing means determining how an application responds to a client request to an endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.)

<b>HTTP request/response</b>

Before you start, I'd highly recommend reviewing HTTP requests and responses:

https://www.tutorialspoint.com/http/http_requests.htm

https://www.tutorialspoint.com/http/http_responses.htm

<b>Creating an API for SportsStore app</b>
- Already have an mLab database created for this
- Already have an AngularJS app that uses API calls to get product data
- Want to replace the API I currently have, which uses Deployd

- For the API, I need to be able to do CRUD operations on a products collection in a Mongo database - for read operations, I need a call where I can return all products
- Already have a Heroku account I can use to deploy the API for free
- Looking for the easiest solution!

<b>An API in under 30 minutes?</b>
- This article got me started with Node.js and a working API on my local server: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

- Uses Express, body-parser and MongoClient
- Works great with Postman

<b>Speed bump 1: Deploying on Heroku</b>
- Tried to deploy but ran into a few problems - port environment variable, ProcFile, pushing to Heroku git, etc.: 

https://devcenter.heroku.com/articles/deploying-nodejs

- Finally test this in Postman and it works!

http://products2.herokuapp.com

<b>Speed bump 2: What's CORS?</b>
- Updated app to use the new API but nothing loads
- Finally diagnosed that this was a problem with CORS:

- From <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Mozilla</a>: “Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use. A user agent makes a cross-origin HTTP request when it requests a resource from a different domain, protocol, or port than the one from which the current document originated.”
- “For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequestand the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request HTTP resources from the same domain the application was loaded from unless CORS headers are used.”

- I added some code to my routes function that enables CORS on my API and republished it on Heroku
- Now a query to get all the items in the collection works

<b>Speed bump 3: Creating and updating</b>
- Querying and deleting work fine, but when I try to create a product the item is blank
- Updating does not work
- $save method on AngularJS $resource does not work 
- Created new product form that does not use $save method but still does not work
- Finally figured out the problem: AngularJS is making a POST request with a serialized JSON object, and my API is expecting requests with FORM data
- Changed how AngularJS was sending data to make the app work

References:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://nodejs.org/en/about/
https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
