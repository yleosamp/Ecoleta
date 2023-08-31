const express = require("express")
const server = express()

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

server.get("/search", function(req, res){
  return res.render("create-point.html") // render irá enviar um arquivo
})

// Ligar o servidor
server.listen(3000)