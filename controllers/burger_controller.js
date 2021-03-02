const express = require("express");
const burgers = require("../models/burger.js");
const hbs = require("express-handlebars");
const orm = require("../config/orm");
const app = express();

//Heroku port 
const PORT = process.env.PORT || 8080;

//handlebats connection 
app.engine('handlebars', hbs({ defaultLayout: 'default' }));
app.set ('view engine', 'handlebars');

//Routes 

app.get('/', (req, res)=> {
    orm.selectAll( 'burgers', function(result) {
        res.render('list', { burger: result });
    });
});

app.post("/api/burger", function(req, res){
    orm.insertOne('burgers', req.params.burger_name, function(result){
        res.render('list', { burger: result });
    })
    
})