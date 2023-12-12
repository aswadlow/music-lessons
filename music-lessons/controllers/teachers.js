const Teacher = require('../models/teacher')

module.exports = {
    index,
    show,
    new: newTeacher,
    create,
    edit,
    update,
    delete: deleteTeacher
}

async function index(req, res){
    const teachers = await Teacher.find({});
    res.render('teachers/index', { title: 'All teachers', teachers });
}

async function show(req, res) {
    const teacher = await Teacher.findById(req.params.id);
    res.render('teachers/show', { title: 'Teacher Detail', teacher});
  }

  function newTeacher(req, res){
    res.render('teachers/new', { title: 'Teachers', errorMsg: ''})
}

async function create(req, res) {
    try {
        console.log(req.body)
      const teacher= await Teacher.create(req.body);
      res.redirect(`/teachers/`);
    } catch(err) {
      console.log(err);
      res.render('teachers/new', { errorMsg: err.message });
    }
}

async function edit(req, res) {
    const teacher = await Teacher.findById(req.params.id);
    res.render('teachers/edit', { title: 'Teacher Profile', teacher});
}

async function update(req, res) {
    const teacherId = req.params.id;
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(teacherId, req.body, { new: true });
        res.redirect(`/teachers/${updatedTeacher._id}`);
    } catch (err) {
        console.error(err);
        res.redirect(`/teachers/${teacherId}/edit`);
    }
}


async function deleteTeacher(req, res) {
    const teacherId = req.params.id; 
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

        if (!deletedTeacher) {
            return res.status(404).send('Teacher not found');
        }
        res.redirect('/teachers'); 
    } catch (err) {
        console.error(err);
        res.render('teachers', { errorMsg: err.message });
    }
}
