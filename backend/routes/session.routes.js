const express = require('express');
const router = express.Router();

const { 
    getSessions, 
    addSession, 
    updateSession, 
    deleteSession 
} = require('../controllers/session.controller');

router.get('/sessions', getSessions);
router.post('/sessions', addSession);
router.put('/sessions/:id', updateSession);
router.delete('/sessions/:id', deleteSession);

module.exports = router;
