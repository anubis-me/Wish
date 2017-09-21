var mongoose = require('mongoose');            // Import Mongoose Package
var Schema   = mongoose.Schema;                // Assign Mongoose Schema function to variable
var titlize  = require('mongoose-title-case'); // Import Mongoose Title Case Plugin



// Wish Mongoose Schema
var WishSchema = new Schema({
    messages   : { type: String, required: true },
    choice     : { type: String, required: true },
    counter    : { type: String},
    views      : { type: String}
});

// Mongoose Plugin to change fields to title case after saved to database (ensures consistency)
WishSchema.plugin(titlize, {
    paths: ['name']
});


module.exports=mongoose.model('wish', WishSchema);