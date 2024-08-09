const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./app/rota/rota");
const db = require("./app/models");

// Config DB
db.sequelize.sync()
  .then(() => {
    console.log("✔ - DB CONNECTED");
  })
  .catch(err => {
    console.log("❌ - Erro ao conectar no banco de dados: " + err.message);
  });

const corsOptions = {
  origin: "http://localhost:8081", // ROTA PARA O ANGULAR CHAMAR
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes); // Prefixo /api para todas as rotas

app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à aplicação." });
});

// Set PORTA
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, () => {
  console.log(`✔  |  Servidor rodando na porta ${PORTA}.`);
});
