import mongoose from 'mongoose';

const courseModel = mongoose.model('course');


// GET Request Handler
const getAllCourses = async (req, res) => {
    try { 
        let courses = await courseModel.find({}, '', {sort: {_id: -1}}).exec();
        //res.status(200).json({message:" All the courses", course: courses});
        res.status(200).json(courses);
         

    } catch (err) {
        res.status(400).send("Bad Request");
    }
   
};

    // POST Request Handler
const addNewCourse = async (req, res) => {
    try {
        let cantAdd = await courseModel.exists({code: req.body.code})
        
        if(!cantAdd) {
            let course = await courseModel.create(req.body);
            res.status(201).json(course); 
        }
        else {
            res.status(403).send('Forbidden. A Course with that course code already exists.');
        }
        
        } catch (err) {
        res.status(400).send('Bad Request. The course in the body of the Request is either missing or malformed.');
        }
    };



export {getAllCourses, addNewCourse };