const express= require('express');
const db=require('./utils/database');
const initModels=require('./models/initModels');
const app=express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const Users=require('./models/users.model');

db.authenticate()
.then(()=> console.log('autenticación exitosa'))
.catch((error)=>console.log(error));

initModels();

db.sync({force:false})
.then(()=> console.log('base de datos sincronizada'))
.catch((error)=>console.log(error));

app.get("/",(req,res)=>{
 res.status(200).json({message:"Bienvenido al servidor"});
});

app.listen(PORT,()=>{
 console.log(`servidor corriendo en el puerto ${PORT}`);
});