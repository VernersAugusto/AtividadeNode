module.exports = app => {
    let UsuariosSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, "é obrigatório"]
        },
        email: {
            type: String,
            required: [true, "é obrigatório"]
        },
        senha: {
            type: String,
            required: [true, "é obrigatório"]
        },
        pokemons: []
    });

    app.db.mongoose.model("Usuarios", UsuariosSchema);


}