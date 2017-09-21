/* packages */
var path        = require('path');
var logger      = require('morgan');
//morgan logger middleware function using the given format and options
var express     = require('express');
var hbs         = require('hbs');


//
const bodyParser = require('body-parser');
// include the method-override package
var methodOverride = require('method-override');



var app = express();//install express on our server
var port = process.env.PORT || 3000;
const toDontsController = require('./controller/toDonts.js')

app.use(methodOverride('_method'));


//log 
app.use(logger('dev'));


app.use(bodyParser.urlencoded({extended: true}));
/*VIEWS*/
app.set("view engine", "hbs"); 
//tells Express what to use for rendering templates
/*CONTROLLERS*/
app.use('/toDonts', toDontsController);

/*Homepage*/
app.get('/', function(req, res){
    res.send("This is screw Todos")
})
 


// Start server
app.listen(port, function() {
    console.info('Server Up', port,"//", new Date());
  });
  