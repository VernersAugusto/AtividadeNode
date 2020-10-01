module.exports = (app) => {
    return {

        listarProdutos: function (req, res) {
            res.json(app.db.produtosDB);
        },

        adicionar: (req, res) => {
            try {
                let produto = {};

                produto.id = req.body.id;
                produto.nome = req.body.nome;
                produto.preco = req.body.preco;

                app.db.produtosDB.push(produto);

                res.send(`Produto adicionado com sucesso: ${produto.nome}`);
            } catch (error) {
                res.send("Erro ao adicionar produto: " + error);
            }
        },
    }
}

