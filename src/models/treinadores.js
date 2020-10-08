module.exports = app => {
    let TreinadoresSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, "é obrigatório"]
        },
        premio: {
            type: Number
        },
        pokemons: []
    });

    app.db.mongoose.model("Treinadores", TreinadoresSchema);
}