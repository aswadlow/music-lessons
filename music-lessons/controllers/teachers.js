const Teacher = require('../models/teacher')

module.exports = {
    index
}

async function index(req, res){
    const teachers = await Teacher.find({});
    res.render('teachers/index', { title: 'Music Lessons', teachers });
}