const Lesson = require('../models/lesson')
const Teacher = require('../models/teacher')

module.exports = {
    new: newLesson,
    create
}


async function newLesson(req, res){
    console.log('new Lesson')
    const teacher = await Teacher.findById(req.params.id);
    res.render('lessons/new', {title: 'Lessons', teacher})
}

async function create(req, res) {
    const teacher = await Teacher.findById(req.params.id);
    req.body.teacher = teacher._id;
    await Lesson.create(req.body)
    res.redirect(`/lessons/${lesson._id}`);
  }