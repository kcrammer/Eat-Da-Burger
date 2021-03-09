const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public')); 
// this code makes public a home url path: http://localhost:8080

// Parse application body as JSON
// takes client data(textboxes/input field from browser) and parse it which makes it readable to use and it stores in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burgersController.js');
//http://localhost:8080/api/burgers => api routes
//http://localhost:8080/burgers => html routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
