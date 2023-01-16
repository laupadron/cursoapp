const db=require('../utils/database');
const {DataTypes}=require ('sequelize');
const Courses = require('./courses.model');
const Users = require('./users.model');

const UsersCourses= db.define("usersCourses",{
 id:{
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement:true,
  allowNull:false,
 },
 userId:{
  type: DataTypes.INTEGER,
  allowNull:false,
  field:"user_id",
  references:{
   model:Users,
   key:"id"
  }
},
courseId:{
 type: DataTypes.INTEGER,
 allowNull:false,
 field:"course_id",
 references:{
  model:Courses,
  key:"id"
 }
},
},
{
 timestamps:false
 });

module.exports=UsersCourses;