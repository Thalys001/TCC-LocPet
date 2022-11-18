const express=require('express');
const cors=require('cors');
const bodyParse=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));

app.get('/',(req, res)=>{
    res.send(' LocPet Back End, está no Ar. Chupa!!! ')
});

let port=process.env.PORT || 3000;
app.listen(port,(req, res)=> {
    console.log (' LocPet Back-End Rodando Porra !!! ')

});