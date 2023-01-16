const {Router}=require('express');
const router= Router();
const {getAllCourses,getWithCategoriesAndVideos,createCourse,updateCourse}=require('../controllers/courses.controllers');


router.get('/courses', getAllCourses);
router.get('/courses/:id', getWithCategoriesAndVideos);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);

module.exports=router;