module.exports = (app) => {
    return {

        listarUsuarios: (req, res) => {
            res.json(app.db.usuariosDB);
        },

        adicionar: (req, res) => {
            try {
                let usuario = req.body;

                app.db.usuariosDB.push(usuario);

                res.send(`Usuário adicionado com sucesso: ${usuario.nome}`);
            } catch (error) {
                res.send(`Erro ao adicionar usuário: ${usuario.nome}`);
            }
        }
    }
}