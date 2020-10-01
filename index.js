const express = require('express');
const consign = require("consign");

// const produtosController = require("./src/controllers/produtosController");
// const usuariosController = require("./src/controllers/usuariosController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

consign({ cwd: 'src' })
    .include("db")
    .then("controllers")
    .into(app);

app.get("/", function (req, res) {
    res.send("olá mundo");
});

app.get("/produtos", app.controllers.produtosController.listarProdutos);
app.post("/produtos", app.controllers.produtosController.adicionar);

app.get("/usuarios", app.controllers.usuariosController.listarUsuarios);
app.post("/usuarios", app.controllers.usuariosController.adicionar);

app.listen(8000, function () {
    console.log("servidor rodando na porta 8000");
});