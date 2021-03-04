const express = require("express");
const exphbs = require ("express-handlebars");
const routes = require("./controllers/burger_controller.js")

//process.env connects heroku
const PORT = process.env.PORT || 8080;

//allows us to use express
const app = express();

//for external files like css , anything other than html 
app.use(express.static("public"));
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//????
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://locaolhost:" + PORT);
});