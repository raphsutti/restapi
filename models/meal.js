var mongoose = require("mongoose");

// Schema set up
var mealSchema = new mongoose.Schema({
    name: String,
    ingredients: Array
});

module.exports = mongoose.model("Meal", mealSchema);