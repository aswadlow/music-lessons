const Lesson = require('../models/lesson')

module.exports = {
    new: newLesson
}

// function newLesson(req, res){
//     res.render('lessons/new', { title: 'Lessons', errorMsg: ''})
// }

async function newLesson(req, res){
    const lesson = await Lesson.findById(req.params.id);
    res.render('lessons/new', {title: 'Lessons', lesson})
}