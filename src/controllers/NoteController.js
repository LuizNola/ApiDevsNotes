const NoteService = require('../Models/NoteService')

module.exports = {
    ping: (req, res) => {res.json({pong: true})},
    
    all: async (req, res)=>{
        let json = {error:'',result:[]};

        let notes = await NoteService.getAll();

        for(let i in notes){
            json.result.push({
                id:notes[i].id,
                title:notes[i].title
            })
        }

        res.json(json);
    },
    one: async (req, res)=>{
        let json = {error:'',result:{}};

        let id = req.params.id;
        let note = await NoteService.findById(id);

        if(note){
            json.result = note;
        }else{
            
        }

        res.json(json);
    },
    new: async ()=>{

    },
    edit: async ()=>{

    },
    delete: async ()=>{
        
    }
};