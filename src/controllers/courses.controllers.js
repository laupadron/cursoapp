const CourseServices= require('../services/courses.services');

const getAllCourses= async (req,res)=>{
 try {
  const result= await CourseServices.getAll();
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const getWithCategoriesAndVideos=async(req,res)=>{
 try {
  const {id}=req.params;
  const result= await CourseServices.getWithCategories(id);
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const createCourse= async(req,res)=>{
 try {
  const newCourse=req.body;
  const result=await CourseServices.create(newCourse);
  res.status(201).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const updateCourse = async (req,res)=>{
 try {
  const{id}=req.params;
  const field=req.body;
  const result= await CourseServices.update(id,field);
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
}


module.exports={getAllCourses,getWithCategoriesAndVideos,createCourse,updateCourse};  