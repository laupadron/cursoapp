const {Sequelize}=require ('sequelize');

const db= new Sequelize ({
 database:"cursoapp",
 username: "postgres",
 host: "localhost",
 port:"5432",
 password:"ruut",
 dialect: "postgres"
});

module.exports=db;