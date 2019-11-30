const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');



//initialization
const app = express();




//Settings
app.set('port', process.env.PORT || 5500);
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs' , exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts' ),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables


//Routes

app.use(require('./routes/index.js'));


//Public

//Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );

