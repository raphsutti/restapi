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
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!")
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB:")
        console.log(cat);
    }
});


// retrieve all cats from DB and console log each one