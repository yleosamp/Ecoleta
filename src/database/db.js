const sqlite3 = require('sqlite3').verbose()

// Criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db


// Utilizar o obj de banco de dados para nossas operações
//db.serialize( () => {
  // Criar tabela com comandos SQL
/*   db.run(`
    CREATE TABLE IF NOT EXISTS place (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  // Inserir dados na tablea
  const query = `
    INSERT INTO place(
      image, 
      name, 
      address, 
      address2, 
      state, 
      city, 
      items
    ) 
    VALUES(?, ?, ?, ?, ?, ?, ?);
  `

  const values = [
    "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/08/iStock-1253713039-Household-Items-You-Can-Get-Paid-to-Recycle.jpg",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "N° 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão"
  ]

  function afterInsertData(err){
    if(err){
      return console.log(err)
    }

    console.log("Cadastrado com sucesso!")
    console.log(this)
  }  */
  //db.run(query, values, afterInsertData)

  // Consultar dados na tabela
//  db.all(`SELECT * FROM place`, function(err, rows){
//    if(err){
//      return console.log(err)
//    }
//
//    console.log("Aqui estão seus registros: ")
//    console.log(rows)
//  })

  // Deletar dados na tabela
/*   db.run(`DELETE FROM place WHERE id = ?`, [3], function(err){
    if(err){
      return console.log(err)
    }

    console.log("Registro deletado com sucesso!")
  })
} ) */

