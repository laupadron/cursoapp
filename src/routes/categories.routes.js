const {Router}=require('express');
const router= Router();
const {createCategory,deleteCategory}=require('../controllers/categories.controllers');

router.post("/category", createCategory);
router.delete("/category/:id", deleteCategory);



module.exports=router;