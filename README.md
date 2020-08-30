# web-server-node-example
Making a web server with middleware and view engine (handlebars)

This is an example of how to create a web server with node.js. It have a middleware that manage the requests that node.js receives.  
Also the app uses to hbs view engine that help us to render the templates, doing this a lot easier to handle dynamic templates. 
Inside the main file (server.js) I set up the public directory with the aim to serve the static files. (CSS, html, images, etc.).
The partials directory contains all files .hbs as header and footer for that include this files inside the files that needed its.
This files contains redundat code that either all files or part of them have. This separation does that maintenance a lot easier.
