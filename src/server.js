import express from "express"; // Serve para escutar as requisições
import {config} from "dotenv"; // Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000; // Define a porta do servidor

const app = express(); // Cria o servidor
app.use(express.json()); // Permite que o servidor leia JSON

app.get("/", (req, res) => { // Rota principal
    const nome = req.query.nome; // Lê o parâmetro nome
    const anime = req.query.anime; // Lê o parâmetro animeconst
    const page = req.query.page; // Lê o parâmetro page
    const limit = req.query.limit; // Lê o parâmetro limit
    const idade = req.query.idade; // Lê o parâmetro idade
    const sobrenome = req.query.sobrenome; // Lê o parâmetro sobrenome
    const email = req.query.email; // Lê o parâmetro email
    const senha = req.query.senha; // Lê o parâmetro senha
    const confSenha = req.query.confSenha; // Lê o parâmetro confSenha
    const nomeAnime = req.query.nomeAnime; // Lê o parâmetro nomeAnime
    const ep = req.query.ep; // Lê o parâmetro ep
    const nota = req.query.nota; // Lê o parâmetro nota
    const comentario = req.query.comentario; // Lê o parâmetro comentario
    const id = req.query.id; // Lê o parâmetro id
    const idAnime = req.query.idAnime; // Lê o parâmetro idAnime

    res.status(200).json({message: `meu nome é ${nome} e tenho ${idade} anos meu email é ${email} minha senha é ${senha}`});// Retorna o nome
});

app.get("/:nome", (req, res) => { // Rota principal
    const nome = req.params.nome; // Lê o parâmetro nome
    res.status(200).json({message: nome});// Retorna o nome
});

app.post("/", (req, res) => { // Rota principal
    res.status(200).json("Hello POST!");
});

app.put("/", (req, res) => { // Rota principal
    res.status(200).json("Hello PUT!");
});

app.delete("/", (req, res) => { // Rota principal
    res.status(200).json("Hello DELETE!");
});
app.listen(port, () => { // Inicia o servidor
    console.log(`⚡Server started on http://localhost:${port}`);
});