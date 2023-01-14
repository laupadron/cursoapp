const db=require('../utils/database');
const {DataTypes}=require ('sequelize');


const Courses= db.define("courses",{
 id:{
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement:true,
  allowNull:false,
 },
 title:{
  type: DataTypes.STRING,
  allowNull:true,
},
description:{
 type: DataTypes.STRING,
 allowNull:true,
},
instructor:{
 type: DataTypes.STRING,
 allowNull:true,
},
},
{
 timestamps:false
 });

module.exports=Courses;