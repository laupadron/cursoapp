const db=require('../utils/database');
const Categories= require('../models/categories.model');
const Courses= require('../models/courses.model');
const Users= require('../models/users.model');
const Videos=require('../models/videos.model');
const UsersCourses= require('../models/usersCourses.model');
const initModels=require('../models/initModels');

initModels();

const users=[
 {firstName:"Laura",lastName:"Padrón",password:1234,email:"laupadron@gmail.com"},
 {firstName:"Lucrecia",lastName:"Padrón",password:5678,email:"lucrepadron@gmail.com"},
 {firstName:"Sofia",lastName:"Maidana",password:9587,email:"sofimaidana@gmail.com"},
]

const courses=[
 {title:"Pasteleria básica",description:"pasteleria desde 0 paraprincipiantes",instructor:"Maria Gomez"},
 {title:"Pastas Italianas",description:"pastas tipicas de italia",instructor:"Maria Gomez"},
 {title:"Fundamentos de la Programacion",description:"programacion para principiantes",instructor:"juan Perez"},
 {title:"Programar un video juego",description:"programacion de video game para niños de 10 a 12 años",instructor:"Juan Perez"},
 {title:"Jaboneria Artesanal",description:"produccion de jabones saponificados",instructor:"Juana Molina"},
]

const usersCourses=[
 {userId:1,courseId:2},
 {userId:1,courseId:5},
 {userId:2,courseId:3},
 {userId:2,courseId:4},
 {userId:3,courseId:1},
 {userId:3,courseId:2},
]

const categories=[
 {name:"Pasteleria",courseId:1},
 {name:"Pastas",courseId:2},
 {name:"Programacion",courseId:3},
 {name:"programacion para niños",courseId:4},
 {name:"jaboneria",courseId:5},
]

const videos =[
 {title:"como hacer una torta",url:"http//www.kdfakjflfjlf.com",courseId:1},
 {title:"como hacer un macarron",url:"http//www.macarrones.com",courseId:1},
 {title:"fetuchinis",url:"http//www.fetuchinis.com",courseId:2},
 {title:"Logica de programacion",url:"http//www.logina.com",courseId:3},
 {title:"introduccion a js",url:"http//www.js.com",courseId:3},
 {title:"programacion para niños",url:"http//www.programadoresniños.com",courseId:4},
 {title:"saponificacion",url:"http//www.saponificar.com",courseId:5},
 {title:"como curar un jabon",url:"http//www.jabonesartesanales.com",courseId:5},
]

db.sync({force:false})
.then(()=>{
 console.log('iniciando el sembradio');
 users.forEach((user)=>Users.create(user));
 setTimeout(()=>{
  courses.forEach((course)=>Courses.create(course))
 },100);
 setTimeout(()=>{
  usersCourses.forEach((uc)=>UsersCourses.create(uc))
 },200);
 setTimeout(()=>{
  categories.forEach((category)=>Categories.create(category))
 },300);
 setTimeout(()=>{
  videos.forEach((video)=>Videos.create(video))
 },400);
})
.catch((error)=>console.log(error))