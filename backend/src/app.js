const express = require("express");
const app = express();
const UsuarioRoutes = require("./routes/UsuarioRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const CategoriaRoutes = require("./routes/CategoriaRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo a Digital Store!");
})

app.use("/", AuthRoutes);
app.use("/", UsuarioRoutes);
app.use("/", CategoriaRoutes);

module.exports = app;