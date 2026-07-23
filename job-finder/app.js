const express = require('express');
const app = express();
const db = require('./db/connection.js');
const bodyParser = require('body-parser')
const jobsRoutes = require('./routes/jobs');

const PORT = 3000;

//bod-parser
app.use(bodyParser.urlencoded({extended: false}))

// conexão com banco
db.authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso!');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta: ${PORT}`);
        });
    })
    .catch((erro) => {
        console.log('Erro ao conectar com o banco:', erro);
    });

// rotas
app.get('/', (req, res) => {
    res.send('Rodando com sucesso');
});

//jobs routes
app.use('/jobs', jobsRoutes);