const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    instruments: {
        type: String,
        enum: ['Guitar', 'Drums', 'Piano', 'Bass', 'Vocal'],
        required: true
    },
    days: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    experience: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }

})



module.exports = mongoose.model('Teacher', teacherSchema);