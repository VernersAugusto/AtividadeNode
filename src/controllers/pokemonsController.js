module.exports = app => {
    let pokemonsModel = app.db.mongoose.model("Pokemons");

    return {
        listarPokemons: (req, res) => {
            pokemonsModel.find({})
                .then((pokemons) => res.json(pokemons))
                .catch((error) => res.status(500).send(error));
        },

        consultarPorId: async (req, res) => {
            let id = req.params.id;

            try {
                pokemon = await pokemonsModel.findById(id);

                if (pokemon)
                    res.json(pokemon);
                else
                    res.status(404).send("Pokemon não encontrado");
            } catch (error) {
                res.status(500).send(`Erro ao buscar pokemon: ${error}`);
            }
        },

        adicionar: (req, res) => {
            try {
                let pokemon = new pokemonsModel(req.body);
                pokemon.save((error) => {
                    if (error)
                        res.status(500).send(`Erro ao criar pokemon: ${error}`);
                    else
                        res.send(`Pokemon adicionado com sucesso: ${pokemon.nome}`);
                })
            } catch (error) {
                res.send(`Erro ao adicionar pokemon ${pokemon.nome}: ${error}`);
            }
        },

        atualizar: (req, res) => {
            let id = req.params.id;
            let pokemon = req.body;

            pokemonsModel.findByIdAndUpdate(id, pokemon, (error) => {
                if (error)
                    res.status(500).send(`Erro ao atualizar pokemon: ${error}`);
                else
                    res.send(`Pokémon atualizado com sucesso ${pokemon.nome}`)
            });
        },

        excluir: (req, res) => {
            let id = req.params.id;

            pokemonsModel.findByIdAndRemove(id, (error) => {
                if (error)
                    res.status(500).send(`Erro ao excluir pokemon: ${error}`)
                else
                    res.send("Pokemon excluído com sucesso");
            });
        }
    }
}