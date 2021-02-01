const db = require('../db');

module.exports = {
  getAll: ()=>{
      return new Promise((resolve, reject)=>{
          
        db.query('SELECT * FROM notes_tb', (error, results)=>{
            if(error){reject(error);   return;}
            resolve(results);
        });
      });
  }, 

  findById: (id) => {
    return new Promise((resolve, reject)=>{

      db.query(`SELECT * FROM notes_tb WHERE id=?`, [id], (error, results)=>{
        if(error){reject(error);   return;}
        if(results.length > 0){
          resolve(results[0]);
        }else{
          resolve(false);
        }
        
      });
    });
  }
};