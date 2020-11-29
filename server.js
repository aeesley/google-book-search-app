// Dependencies
const express = require('express');
const routes = require('./routes');

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 9001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);
const bookModel = require('./models/book')

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};

// API and View Routes
//app.use(routes);

app.post("/savedbooks", function(req,res){
    console.log("we hit the route", req.body);

    var newBookTosave = {
        title: req.body.volumeInfo.title
    }

    bookModel.create(newBookTosave).then(function(data) {
        console.log('new dude we saved!!', data)
    })

})

// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});