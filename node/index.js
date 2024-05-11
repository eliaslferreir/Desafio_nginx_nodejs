const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

app.listen(PORT, () => {
    console.log('Executando na porta: ' + PORT);
});

const names = [
    'Elias',
    'Jessica',
    'Daiana',
    'Junior',
    'Katia',
    'Maria Clara',
    'Jubileu'
];

function insertRandomName() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const query = `INSERT INTO nodedb.people (name) VALUES ('${randomName}')`;
    connection.query(query, (error, result) => {
        if (error) {
            console.error('Erro na inserção:', error);
        } else {
            console.log('Inserido com sucesso:', randomName, 'with ID:', result.insertId);
        }
    });
}

app.get('/', (req, res) => {
    insertRandomName();
    const query = 'SELECT id, name FROM nodedb.people';
    connection.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        let table = '<table>';
        table += '<tr><th>ID</th><th>NOME</th></tr>';
        results.forEach((result) => {
            table += `<tr><td style="padding: 5px; border: 1px solid black;">${result.id}</td><td style="padding: 5px; border: 1px solid black;">${result.name}</td></tr>`;
        });
        table += '</table>';
        res.send('<center><h1>Full Cycle Rocks!</h1>' + table + '</center>');
    });
});