const express = require('express');
const consign = require("consign");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

consign({ cwd: 'src' })
    .include("db")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

app.listen(8000, function () {
    console.log("servidor rodando na porta 8000");
});