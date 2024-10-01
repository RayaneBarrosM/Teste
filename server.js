const express = require('express');
const path = require('path');
const server = express();

// Configurar o middleware para servir arquivos estáticos da pasta 'public'
server.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o arquivo HTML
server.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'quiz.html'));
});

// Iniciar o servidor
server.listen(3001, () => {
    console.log("Servidor em pé em http://localhost:3001");
    console.log("Para desligar o servidor, pressione ctrl + c");
});