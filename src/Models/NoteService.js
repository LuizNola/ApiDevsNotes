const db = require('../db');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {

      db.query('SELECT * FROM notes_tb', (error, results) => {
        if (error) { reject(error); return; }
        resolve(results);
      });
    });
  },

  add: (title, body) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO notes_tb (title, body) VALUES (?, ?)',
            [title, body],
            (error, results) => {
                if(error){ reject(error); return}
                resolve(results.insertId)
            }
        )
    })
},

  update: (id, title, body)=>{
    return new Promise((resolve, reject) => {
      db.query('UPDATE notes_tb SET title = ?, body = ? WHERE id = ?', [title, body, id], (error, result) => {
        if (error) { reject(error); return; }
        resolve(result);
      })
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {

      db.query('DELETE FROM notes_tb WHERE id = ?', [id], (error, result) => {
        if (error) { reject(error); return; }

        resolve(result);
      })

    });

  }
};