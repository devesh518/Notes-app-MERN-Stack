const mongoose = require('mongoose');

// Creating a schema for Notes
const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },

    tag: {
        type: String,
        default: "General"
    },

    date: {
        type: Date,
        default: Date.now
    }
})

// Exporting the model
module.exports = mongoose.model("notes", NotesSchema);