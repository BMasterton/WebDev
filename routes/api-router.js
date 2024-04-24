import express from 'express';
// import { getAllMessages, addNewMessage, updateMessage, deleteMessage } from '../controllers/msg-api-controller.js';
// import { registerNewUser, logInUser } from '../controllers/user-api-controller.js';
import { getAllCourses, addNewCourse } from '../controllers/final-api-controller.js';
//import passport from 'passport';

const router = express.Router();

// router.route('/courses')
// .get(getAllCourses)
// // .post(passport.authenticate('jwt', { session: false }),
// // addNewMessage);


router.route('/courses')
.get(getAllCourses)
.post(addNewCourse);


// router.route('/users')
// .post(registerNewUser);

// router.route('/login')
// .post(passport.authenticate('local', {session: false}), logInUser);

// router.route('/messages/:messageId')
// .patch(passport.authenticate('jwt', {session: false}), updateMessage);

// router.route('/messages/:messageId')
// .delete(passport.authenticate('jwt', {session: false}), deleteMessage);

export default router;