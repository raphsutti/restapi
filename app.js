var express     = require("express"),
    app         = express(),
    // bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    
mongoose.connect("mongodb://localhost/meal");
// app.use(bodyParser.urlenconded({extended: true}));
app.set("view engine", "ejs");

// Schema set up
var mealSchema = new mongoose.Schema({
    name: String,
    ingredients: Array
});

var Meal = mongoose.model("Meal", mealSchema);

Meal.create(
    {
        name: "Masaman Curry", 
        ingredients: ["rice", "masaman", "potato", "onion", "beef"]
    }, function(err, meal){
        if(err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED MEAL");
            console.log(meal);
        }
    });