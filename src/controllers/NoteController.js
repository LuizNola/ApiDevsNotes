const NoteService = require('../Models/NoteService')

module.exports = {
    ping: (req, res) => {res.json({pong: true})}
};