const express= require('express');
const db=require('./utils/database');
const initModels=require('./models/initModels');
const app=express();
const videosRoutes=require('./routes/videos.routes');
const userRoutes=require('./routes/users.routes');
const coursesRoutes=require('./routes/courses.routes');
const categoriesRoutes=require('./routes/categories.routes');

const PORT = 8000;
const Users=require('./models/users.model');
app.use(express.json());
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

app.use('/api/v1', userRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videosRoutes);
app.use('/api/v1', categoriesRoutes);



app.listen(PORT,()=>{
 console.log(`servidor corriendo en el puerto ${PORT}`);
});