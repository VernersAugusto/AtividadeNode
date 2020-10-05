module.exports = app => {
    return {
        listarTreinadores: (req, res) => {
            res.json(app.db.treinadoresDB);
        },

        consultarPorId: (req, res) => {
            let id = req.params.id;

            let treinador = app.db.treinadoresDB.find((item) => id == item.id);
            res.json(treinador);
        },

        adicionar: (req, res) => {
            try {
                let treinador = req.body;

                app.db.treinadoresDB.push(treinador);

                res.send(`Treinador adicionado com sucesso ${treinador.nome}`);
            } catch (error) {
                res.send(`Erro ao adicionar treinador ${treinador.nome}: ${error}`);
            }
        },

        atualizar: (req, res) => {
            let id = req.body.id;
            let treinador = req.body;
            let index = app.db.treinadoresDB.findIndex((item) => id == item.id);

            app.db.treinadoresDB[index] = treinador;

            res.send(`Treinador ${treinador.nome} atualizado com sucesso`);
        },

        excluir: (req, res) => {
            let id = req.body.id;

            app.db.treinadoresDB = app.db.treinadoresDB.filter((item) => id != item.id);
            res.send(`Treinador excluído com sucesso`);
        }
    }
}