const express = require('express');
const app = express();
const port = 8008; // Porta em que o servidor será executado

app.use(express.static('.'));
// Rota para exibir a página index.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/Tela-inicio.html');
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/Tela-inicio.html');
});

