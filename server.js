//require the express module
const express = require('express');
//require the hbs module.
//hbs is a view engine for render templates (as ejs, for example)
const hbs = require('hbs');
//fs will allow me write the logger messages inside a text file
const fs = require('fs');
var app = express();

//register a middleware
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method}:${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err){
            console.log('Unable to append to server.log.');
        }
    });
    next();
});
//This middleware is useful when we have the site in maintenance.
app.use((use, res , next)=>{
    res.render('maintenance.hbs');
});


//
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

//directory where partials going to live
hbs.registerPartials(__dirname + '/views/partials');

//set up which view engine I am going to use
app.set('view engine','hbs');
//set up inside which directory the static files will live
app.use(express.static(__dirname+'/public'));

//port where the server will listen to requests
app.listen(3000,()=>{
    console.log('I am up in port 3000! ')
});


app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: "Home",
        welcomeMessage: "Hello Express!",
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs',
    {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
})



