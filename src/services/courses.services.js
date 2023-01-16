const Categories = require('../models/categories.model');
const Courses= require('../models/courses.model');
const Videos = require('../models/videos.model');

class CourseServices{
 static async getAll(){
  try {
   const result= await Courses.findAll();
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async getWithCategories(id){
  try {
   const result=await Courses.findOne({
    where:{id},
    attributes:["title"],
    include:[{
     model:Categories ,
     as:"category",
     attributes:["name"]},
     {
     model:Videos,
      as:"video",
      attributes:["title","url"]
     
    }],
    
     
   });
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async create(course){
  try {
   const result= await Courses.create(course);
   return result;
  } catch (error) {
   throw error;
  }
 };
 static async update(id,field){
  try {
   const result= await Courses.update(field,{
    where:{id}});
    return result;
  } catch (error) {
   throw error;
  }
  
 }
}

module.exports=CourseServices;