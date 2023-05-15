const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routers/bookRouter.js');
const movieRouter = require('./routers/moviesRouter.js');
const app = express();
const PORT = process.env.PORT || 5000;
//const bookList = [];
//const movieList = [];


// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// express static file serving - public is the folder name
app.use( express.static('server/public') );
app.use('/book', bookRouter);
app.use('/movie', movieRouter);




// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});



