module.exports = app => {
    let treinadoresModel = app.db.mongoose.model("Treinadores");

    return {
        listarTreinadores: (req, res) => {
            treinadoresModel.find({})
                .then((treinadores) => res.json(treinadores))
                .catch((error) => res.status(500).send(error));
        },

        consultarPorId: (req, res) => {
            let id = req.params.id;

            treinadoresModel.findById(id)
                .then((treinador) => res.json(treinador))
                .catch((error) => res.status(500).send(error));
        },

        adicionar: (req, res) => {
            try {
                let treinador = new treinadoresModel(req.body);
                treinador.save((error) => {
                    if (error)
                        res.send(500).send(`Erro ao adicionar treinador ${treinador.nome}: ${error}`);
                    else
                        res.send(`Treinador adicionado com sucesso ${treinador.nome}`);
                });
            } catch (error) {
                res.send(`Erro ao adicionar treinador ${treinador.nome}: ${error}`);
            }
        },

        atualizar: (req, res) => {
            let id = req.params.id;
            let treinador = req.body;

            treinadoresModel.findByIdAndUpdate(id, treinador, (error) => {
                if (error)
                    res.status(500).send(`Erro ao atualizar treinador ${treinador.nome}: ${error}`)
                else
                    res.send(`Treinador ${treinador.nome} atualizado com sucesso`);
            });
        },

        excluir: (req, res) => {
            let id = req.params.id;

            treinadoresModel.findByIdAndRemove(id, (error) => {
                if (error)
                    res.status(500).send(`Erro ao excluir treinador: ${error}`)
                else
                    res.send(`Treinador excluído com sucesso`);
            })
        }
    }
}