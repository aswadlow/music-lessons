const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lessonSchema = new Schema({
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    instrument: {
        type: String,
        enum: ['Guitar', 'Drums', 'Piano', 'Bass', 'Vocals'],
        required: true
    },
    date: {
        type: Date,
        default: function () {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth();
            const day = today.getDate();
            const finalDate = new Date(year, month, day + 365);
            return finalDate;
           },
           required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        enum: ['30 mins', '45 mins', '1 hour', '1.5 hours', '2 hours'],
        required: true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    }
})


module.exports = mongoose.model('Lesson', lessonSchema);