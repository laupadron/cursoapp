const db=require('../utils/database');
const {DataTypes}=require ('sequelize');


const Users= db.define("users",{
 id:{
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement:true,
  allowNull:false,
 },
 firstName:{
  type: DataTypes.STRING,
  allowNull:true,
  field:"first_name"
},
lastName:{
 type: DataTypes.STRING,
 allowNull:true,
 field:"last_name"
},
password:{
 type: DataTypes.STRING,
 allowNull:true,
},
email:{
 type: DataTypes.STRING,
 allowNull:true,
 unique:true,
 validate:{
  isEmail:true
 }
},

},
{
 timestamps:false
 });

module.exports=Users;