module.exports = app => {
    return {
        listarPokemons: (req, res) => {
            res.json(app.db.pokemonsDB);
        },

        consultarPorId: (req, res) => {
            let id = req.params.id;

            let pokemon = app.db.pokemonsDB.find((item) => id == item.id);
            res.json(pokemon);
        },

        adicionar: (req, res) => {
            try {
                let pokemon = req.body;

                app.db.pokemonsDB.push(pokemon);

                res.send(`Pokemon adicionado com sucesso: ${pokemon.nome}`);
            } catch (error) {
                res.send(`Erro ao adicionar pokemon ${pokemon.nome}: ${error}`);
            }
        },

        atualizar: (req, res) => {
            let id = req.body.id;
            let pokemon = req.body;
            let index = app.db.pokemonsDB.findIndex((item) => id == item.id);

            app.db.pokemonsDB[index] = pokemon;

            res.send(`Pokemon ${pokemon.nome} atualizado com sucesso`);
        },

        excluir: (req, res) => {
            let id = req.body.id;

            app.db.pokemonsDB = app.db.pokemonsDB.filter((item) => id != item.id);
            res.send(`Pokemon excluído com sucesso`);
        }
    }
}