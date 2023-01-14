const db=require('../utils/database');
const {DataTypes}=require ('sequelize');
const Courses = require('./courses.model');


const Categories= db.define("categories",{
 id:{
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement:true,
  allowNull:false,
 },
 name:{
  type: DataTypes.STRING,
  allowNull:true,
},
courseId:{
 type: DataTypes.INTEGER,
 allowNull:true,
 field:"course_id",
 references:{
  model:Courses,
  key:"id"
 }
},

},
{
timestamps:false
}
);

module.exports=Categories;