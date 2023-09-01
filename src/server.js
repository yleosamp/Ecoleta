const express = require("express")
const server = express()

// Habilitar o uso do req.body na URL
server.use(express.urlencoded({ extended: true }))

// Pegar o banco de dados
const db = require('./database/db')

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// Configurar a pasta "public"
server.use(express.static("public"))

// Configurar rotas da minha aplicação
// Página inicial

// req: Requisição
// res: Resposta
server.get("/", function(req, res){
  return res.render("index.html") // render irá enviar um arquivo
})

server.get("/create-point", function(req, res){

  return res.render("create-point.html") // render irá enviar um arquivo
})

server.post("/savepoint", (req, res) => {
  // Inserir dados no banco de dados
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
    req.body.image, req.body.name, 
    req.body.address, req.body.address2, 
    req.body.state, req.body.city, 
    req.body.items
  ]

  function afterInsertData(err){
    if(err){
      console.log(err)
      return res.send("Erro no cadastro!")
    }

    console.log("Cadastrado com sucesso!")
    console.log(this)

    return res.render("create-point.html", { saved: true })
  }
  db.run(query, values, afterInsertData)
})

server.get("/search", function(req, res){
  const search = req.query.search

  if(search == "") {
    return res.render("search.html", { total: 0 }) // render irá enviar um arquivo

  }

  // PEGAR OS DADOS DA DB
    db.all(`SELECT * FROM place WHERE city LIKE '%${search}%'`, function(err, rows){
      if(err){
        return console.log(err)
      }

      const total = rows.length

      // MOSTRAR A PAGINA COM OS DADOS DA DB
      return res.render("search.html", { place: rows, total: total }) // render irá enviar um arquivo
    })

})

// Ligar o servidor
server.listen(3000)