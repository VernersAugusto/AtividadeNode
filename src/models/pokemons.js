module.exports = app => {
    let PokemonsSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, "é obrigatório"]
        },
        tipo1: {
            type: String,
            required: [true, "é obrigatório"]
        },
        tipo2: String,
    });

    app.db.mongoose.model("Pokemons", PokemonsSchema);
}