/**
 * Model.js- model definition corresponding to our MongoDB collection
 */


const mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    }
});

var Assignment = module.exports = mongoose.model("Assignment", assignmentSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);

}