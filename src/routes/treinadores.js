module.exports = (app) => {
    app.get("/treinadores", app.controllers.treinadoresController.listarTreinadores);
    app.get("/treinadores/:id", app.controllers.treinadoresController.consultarPorId);
    app.post("/treinadores", app.controllers.treinadoresController.adicionar);
    app.put("/treinadores/:id", app.controllers.treinadoresController.atualizar);
    app.delete("/treinadores/:id", app.controllers.treinadoresController.excluir);
}