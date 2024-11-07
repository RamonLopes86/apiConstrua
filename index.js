const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const bd = require('./bd.json')



const port = process.env.PORT || 8080;



app.get('/exibir' , (req , res)=>{

    

    const resultado = bd

    res.json(resultado)


})


app.get('/consulta' , (req, res) =>{


        const nome = String(req.query.nome)

        try {

            const resultado = bd.products.filter((itens)=>
        
                itens.name.toLocaleLowerCase().includes(nome.toLocaleLowerCase())
            
            )  
      
            if(resultado.length>0){

                res.json(resultado)
            }else{

                res.json({msg:'nao encontrado'})
            }
            
        } catch (error) {

            res.json({erro:'aconteceu algo errado'})
        }   
     

})


app.listen( port , ()=>{

    console.log(`servidor iniciado na porta ${port}`)

})






// import express from 'express';
// import cors from 'cors';
// import fs from 'fs/promises'; // Importa a versão promissificada do fs

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = 8000;

// async function startServer() {
//     // Ler o arquivo JSON usando fs
//     let bd;
  
//         const data = await fs.readFile('./bd.json');

//         bd = JSON.parse(data); // Converter de string para objeto
 

//     app.get('/exibir', (req, res) => {
//         res.json(bd); // Envia os dados lidos
//     });

//     app.listen(port, () => {
//         console.log(`Servidor iniciado na porta ${port}`);
//     });
// }

// startServer()
