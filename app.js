var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Meal        = require("./models/meal")

var PORT = 8080,
    HOST_NAME = 'localhost',
    DATABASE_NAME = 'meal';
    
mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

// Meal.create(
//     {
//         name: "Masaman Curry", 
//         ingredients: ["rice", "masaman", "potato", "onion", "beef"]
//     }, function(err, meal){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED MEAL");
//             console.log(meal);
//         }
//     });

// Root route
app.get("/", function(req, res){
    res.render("index");
});

// GET all meals route
app.get("/meals", function(req, res){
    Meal.find({}, function(err, meals){
        if(err){
            console.log(err);
        } else {
            res.json(meals)     
        }
    });
});

// POST new meal route
app.post("/meals", function(req, res){
    var name = req.body.name;
    var ingredients = req.body.ingredients;
    var newMeal = {name: name, ingredients: ingredients}

    Meal.create(newMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/meals");
        }
    })
    
});

// GET id route
app.get("/meals/:id", function(req, res){
    Meal.findById(req.params.id).populate("comments").exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            res.json(foundMeal)
        }
    })
})


// DELETE route
app.delete("/meals/:id", function(req, res){
    Meal.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err)
       } else {
           res.redirect("/meals");
       }
    });
});

// app.listen(PORT, function () {
app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server started');
});
