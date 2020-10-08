module.exports = (app) => {
    app.get("/usuarios", app.controllers.usuariosController.listarUsuarios);
    app.post("/usuarios", app.controllers.usuariosController.adicionar);
    app.get("/usuarios/:id", app.controllers.usuariosController.consultarPorId);
    app.put("/usuarios/:id", app.controllers.usuariosController.atualizar);
    app.delete("/usuarios/:id", app.controllers.usuariosController.excluir);
}