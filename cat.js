var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// Pattern for data. not table. no SQL
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Compile into model with methods we need
// Takes "Cat" and pluralises to Cats
var Cat = mongoose.model("Cat", catSchema);

// add new cat to DB
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });

// use create for new and save
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from DB and console log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
})