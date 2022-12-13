const Note = require('../../models/note');

module.exports = {
    find,
    create
}

async function create(req, res) {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    // note.save()
    res.json(note);
}

async function find(req, res) {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
}