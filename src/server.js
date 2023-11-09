import express from "express"; // Serve para escutar as requisições
import {config} from "dotenv"; // Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000; // Define a porta do servidor

const app = express(); // Cria o servidor
app.use(express.json()); // Permite que o servidor leia JSON

app.get("/", (req, res) => { // Rota principal
    res.status(200).json("Hello World!");
});

app.listen(port, () => { // Inicia o servidor
    console.log(`⚡Server started on http://localhost:${port}`);
});