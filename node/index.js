const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) values ('Marcos')"
connection.query(sql)

app.get('/', (req,res) => {
    const sqlConsulta = "Select * from people"
    connection.query(sqlConsulta,(err,result)=>{
        if (err) throw err;
        let stringRetorno = "";

        for(let i=0;i<result.length;i++)
        {
            stringRetorno += result[i].id + "-" + result[i].name + "<br>";
        }
        
        res.send(`<h1>Full Cycle Rocks</h1> <p>Alunos:<br>${stringRetorno}</p>`)
        connection.end();
    })
})

app.listen (port,() =>{
    console.log('Rodando na porta ' + port)
})