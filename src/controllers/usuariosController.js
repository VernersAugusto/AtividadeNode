/*const usuarios = require("../models/usuarios");*/

module.exports = app => {
    let usuariosModel = app.db.mongoose.model("Usuarios");

    return {
        listarUsuarios: (req, res) => {
            usuariosModel.find({})
                .then((usuarios) => res.json(usuarios))
                .catch((error) => res.status(500).send(error));
        },

        adicionar: (req, res) => {
            try {
                let usuario = new usuariosModel(req.body);
                usuario.save((error) => {
                    if (error)
                        res.status(500).send(`Erro ao criar usuario: ${error}`);
                    else
                        res.send(`Usuário adicionado com sucesso: ${usuario.nome}`);
                })
            } catch (error) {
                res.send(`Erro ao adicionar usuário: ${usuario.nome}`);
            }
        },

        consultarPorId: (req, res) => {
            let id = req.params.id;

            usuariosModel.findById(id)
                .then((usuario, error) => {
                    if (error)
                        res.status(404).end();
                    else
                        res.json(usuario);
                })
                .catch((error) => res.status(404).send());
        },

        atualizar: (req, res) => {
            let id = req.params.id;
            let usuario = req.body;

            usuariosModel.findByIdAndUpdate(id, usuario, (error) => {
                if (error)
                    res.status(500).send(`Erro ao atualizar usuário: ${error}`);
                else
                    res.send("Usuário atualizado com sucesso");
            });
        },

        excluir: (req, res) => {
            let id = req.params.id;

            usuariosModel.findByIdAndRemove(id, (error) => {
                if (error)
                    res.status(500).send(`Erro ao excluir usuário: ${error}`);
                else
                    res.send("Usuário excluído com sucesso");
            });
        },


    }
}