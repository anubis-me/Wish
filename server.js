var express     = require('express');       // Experss JS Framework
var app         = express();                // Invoke express to variable for use in application
var port        = process.env.PORT || 8000; // Set default port or assign a port in enviornment
var morgan      = require('morgan');        // Import Morgan Package
var mongoose    = require('mongoose');      // HTTP request logger middleware for Node.js
var bodyParser  = require('body-parser');   // Node.js body parsing middleware. Parses incoming request bodies in a middleware before your handlers, available under req.body.
var router      = express.Router();         // Invoke the Express Router
var appRoutes   = require('./app/routes/api')(router); // Import the application end points/API
var path        = require('path'); // Import path module


app.use(morgan('dev'));             // Morgan Middleware
app.use(bodyParser.json());         // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // Allow front end to access public folder
app.use('/api', appRoutes);         // Assign name to end points (e.g., '/api/management/', '/api/users' ,etc. )


// Set Application Static Layout
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); // Set index.html as layout
});

// Start Serve
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});

mongoose.connect('mongodb://abhinav3006gupta:Abhilash.guptaAb1998@ds040167.mlab.com:40167/wishes', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
        console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
});
