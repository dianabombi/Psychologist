const Contact = require ("../models/contactForm");

// IN THIS CASE, THERE IS NO NEED TO RENDER CONTACT OF SINGLE USER, 
// WILL BE INTEGRATED WITH NODEMAILER

const createContact = async (req, res) => {
    try {
        let newContact = req.body;
        await Contact.create (newContact);
        return res.send({msg: "Contact has been created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Contact can not be created", error})
        }
    };

const updateContact = async (req, res) => {
    try {
        let newValue = req.body;
        let id = req.params.id;

        let isContactFound = await Contact.findOne({_id: id});
        if (!isContactFound) return res.send({msg: "Contact is not found."});

        let updatedContact = await Contact.findByIdAndUpdate (id, newValue);
        return res.send({msg: "Contact has been updated successfully.", updatedContact});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Contact can not be shown", error})
        }
    };

const deleteContact = async (req, res) => {
     try {
        let id = req.params.id;
        
        let isContactFound = await Contact.findOne({_id: id});
        if (!isContactFound) return res.send({msg: "Contact is not found."});

        let deletedContact = await Contact.findByIdAndDelete (id);
        return res.send({msg: "Contact has been deleted successfully.", deletedContact});
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Contact can not be deleted", error})
        }
    };


module.exports = {createContact, updateContact, deleteContact};