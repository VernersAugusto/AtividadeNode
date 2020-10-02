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

        consultarPorId: (req, res) => {
            let id = req.params.id;
            let produto = app.db.produtosDB.find((item) => id == item.id);
            res.json(produto);

        },

        atualizar: (req, res) => {
            let id = req.params.id;
            let produto = req.body;
            let index = app.db.produtosDB.findIndex((item) => id == item.id);
            app.db.produtosDB[index] = produto;
            res.send("Produto atualizado com sucesso");
        },

        excluir: (req, res) => {
            let id = req.params.id;

            app.db.produtosDB = app.db.produtosDB.filter((item) => id != item.id);
            res.send("Produto excluido com sucesso");
        }
    }
}

