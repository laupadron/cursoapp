
const Courses = require('../models/courses.model');
const Users=require('../models/users.model');
const UsersCourses = require('../models/usersCourses.model');

class UserServices{
 static async getById(id){
  try {
   const result= await Users.findByPk(id,{
    attributes:{
     exclude:["password"]
    }
   });
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async getWithCourses(id){
  try {
   const result= await Users.findOne({
    where:{id},
    attributes:{
     exclude:["password"]
    },
    include:{
     model:UsersCourses,
     as:"course",
     include:{
      model:Courses,
      as:"course",
      attributes:["title"]
     }
    }
   });
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async create(user){
  try {
   const result= await Users.create(user);
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async addCourse(newCourse){
  try {
   const result= await UsersCourses.create(newCourse);
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async update(id,field){
  try {
   const result= await Users.update(field,{
    where:{id}});
    return result;
  } catch (error) {
   throw error;
  }
 }
}

module.exports= UserServices;