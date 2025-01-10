// Diary is the section built by daily notes, by specific User. 
// This section is accessible only for specific User

const Diary = require ("../models/diary");

const getAllNotes = async (req, res) => {
    try {
        let notes = await Diary.find();
        return res.send(notes);
    } catch (error) {
        return res.status(500).send({msg:"Notes can not be found", error})
    }    
};

const getNotesById = async (req, res) => {
    try {
        let note = await Diary.findOne({_id: req.params.id});
        return res.send(note);
    } catch (error) {
        return res.status(500).send({msg:"Blog can not be found", error})
    }
};

const createNote = async (req, res) => {
    try {
        const { date, content, mood } = req.body;

                if (!date || !content || !mood) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newDiary = new Diary({ date, content, mood });
        await newDiary.save();
        return res.status(201).json(newDiary);
    } catch (error) {
        return res.status(500).send({msg:"Daily notes can not be created", error})
    }
};

const updateNotes = async (req, res) => {
    try {
        let newValue = req.body;
        let id = req.params.id;

        let isNoteFound = await Diary.findOne({_id: id});
        if (!isNoteFound) return res.send({msg: "Daily notes is not found."});

        let updatedNotes = await Diary.findByIdAndUpdate (id, newValue);
        return res.send({msg: "Daily notes has been updated successfully.", updatedNotes});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Daily note can't be shown", error})
        }
    };

const deleteNotes = async (req, res) => {
    try {
        let id = req.params.id;
        
        let isNoteFound = await Diary.findOne({_id: id});
        if (!isNoteFound) return res.send({msg: "Note is not found."});

        let deletedNote = await Diary.findByIdAndDelete (id);
        return res.send({msg: "Blog has been deleted successfully.", deletedNote});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Blog can not be deleted", error})
        }
    };


module.exports = {getAllNotes, getNotesById, createNote, updateNotes, deleteNotes}
