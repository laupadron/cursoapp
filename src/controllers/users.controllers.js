const UserServices= require('../services/user.services');



const getUserById= async (req,res)=>{
try {
 const {id}=req.params;
 const result= await UserServices.getById(id);
 res.status(200).json(result);

} catch (error) {
 res.status(400).json(error.message);
}
};

const getUserWithCourses= async(req,res)=>{
 try {
  const {id}=req.params;
  const result= await UserServices.getWithCourses(id);
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const createUser= async (req,res)=>{
 try {
  const newUser=req.body;
  const result=await UserServices.create(newUser);
  res.status(201).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const addCourseToUser= async (req,res)=>{
 try {
  const { id } = req.params;
  const { courseId } = req.body;
  const newCourse = { userId: id, courseId}
  const result=await UserServices.addCourse(newCourse);
  res.status(201).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const updateUser = async (req,res)=>{
 try {
  const{id}=req.params;
  const field=req.body;
  const result= await UserServices.update(id,field);
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
}

module.exports={getUserById, getUserWithCourses,createUser,updateUser,addCourseToUser};