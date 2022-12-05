const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require ('./database/connection');
const User = require('./models/user');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/outputFiles', express.static(path.join(__dirname, '/outputFiles')));

// Rota Login
app.post('/login', async (req,res) => {
    try {
        let response=await User.findOne({
            where:{
                email: req.body.email,
                senha: req.body.senha}
        });
        console.log(response)

        if(response === null){
            res.send(JSON.stringify('error'));
        }else{
            res.send(response);
        }
    } catch (err) {
        res.status(500).json({error: err})
    }
});

app.post('/cadastro', async (req, res) => {
    try {
        let userExists=await User.findOne({
            where:{
                email: req.body.email,
                senha: req.body.senha}
        });

        console.log(userExists);

        if (userExists === null) {
            const newUser = await User.create({
                email: req.body.email,
                senha: req.body.senha,        
            }
            
          )            
        }
        else{
            return alert(JSON.stringify('Email já cadastrado')
        )};

        const { id } = newUser;

        return res.status(201).json({ id, email });

    } catch (err) {
        return res.status(400).json({ error: 'Erro: ' + err });
    }})

// Server Front-End
app.get('/', (req, res) => {
    res.send(' LocPt Back End, está no Ar. !!! ')
});

// Server Back-End
app.listen(3000, () => {
    console.log('Iniciando Servidor back-end')
})