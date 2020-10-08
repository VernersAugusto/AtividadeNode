const mongoose = require("mongoose");

module.exports = app => {
    mongoose.connect(`mongodb://localhost:27017/atividadeNode`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => console.log(`Conexão com o MongoDb realizada`))
        .catch((error) => console.log(`Erro ao conectar ao mongoDb: ${error}`));

    return mongoose;
}