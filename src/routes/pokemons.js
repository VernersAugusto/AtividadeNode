module.exports = app => {
    app.get("/pokemons", app.controllers.pokemonsController.listarPokemons);
    app.get("/pokemons/:id", app.controllers.pokemonsController.consultarPorId);
    app.post("/pokemons", app.controllers.pokemonsController.adicionar);
    app.put("/pokemons/:id", app.controllers.pokemonsController.atualizar);
    app.delete("/pokemons/:id", app.controllers.pokemonsController.excluir);
}