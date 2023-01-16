const Categories = require('./categories.model');
const Courses = require('./courses.model');
const Users=require('./users.model');
const UsersCourses = require('./usersCourses.model');
const Videos = require('./videos.model');

const initModels=()=>{
UsersCourses.belongsTo(Users,{as:"author",foreignKey:"user_id"});
Users.hasMany(UsersCourses,{as:"course",foreignKey:"user_id"});
UsersCourses.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
Courses.hasMany(UsersCourses,{as:"author",foreignKey:"course_id"});

Videos.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
Courses.hasMany(Videos,{as:"video",foreignKey:"course_id"});

Categories.belongsTo(Courses,{as:"course",foreignKey:"course_id"});
Courses.hasMany(Categories,{as:"category",foreignKey:"course_id"});
};

module.exports=initModels;  