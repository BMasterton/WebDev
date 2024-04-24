// import mongoose from 'mongoose';
// import passport from 'passport';
// import LocalStrategy from 'passport-local';
// import jwt from 'jsonwebtoken';
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

// let jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey = process.env.JWT_SECRET;



// const userModel = mongoose.model('user');


// const alreadyExists = async ( email, username ) => (
//     await userModel.exists({
//         '$or': [
//                 { email: email },
//                 { username: username }
//             ]
//     })
// );

// // Configure JWT Token Auth
// passport.use(new JwtStrategy(
//     jwtOptions, async (jwt_payload, done) => {
//         try {
//             const user = await userModel.findById(jwt_payload.sub).exec();
//             if (!user) {
//             // user wasn't found
//                 return done(null, false);
//             } else {
//         // user found!
//             return done(null, user);
//             }
//         } catch (error) {
//         // error in searching for user
//             return done(error);
//         }
//     }
// ));

// // Login Handler
// const logInUser = (req, res) => {

//     // generates a JWT Token
//     jwt.sign(
//         { sub: req.user._id,
//             username: req.user.username },
//         process.env.JWT_SECRET,
//         { expiresIn: '20m' },
//         ( error, token) => {
//             if (error) {
//                 res.status(400).send('Bad Request. Couldnt generate token.');
//             } else {
//                 res.status(200).json({ token });
//             }
//         }
//     );
// };

// const registerNewUser = async (req, res) => {

// try {
//     if( await alreadyExists(req.body.email, req.body.username)){
//         res.status(403).send("Forbidden - Username or Email already exists")
//         //res.status(200).send('Successful API New User POST Request');
// }
// This will send back a 200 OK and a simple text success response once tested. The async modifier is there
//     } 
//     else {
//         let user = await userModel.create(req.body);
//         res.status(201).json(user);
//     }

//         } catch (err) {
//         res.status(400).send('Bad Request. The message in the body of the \ Request is either missing or malformed.');
//         }
//     }


//     passport.use(new LocalStrategy(
//         async (userIdent, password, done) => {
//             try {
//                 const user = await userModel.findOne({
//                     '$or': [
//                         { email: userIdent },
//                         { username: userIdent }
//                     ]
//                 }).exec();
//             // user wasn't found
//                 if (!user) return done(null, false);
//                 // user was found, see if it's a valid password
//                 if (!await user.verifyPassword(password)) {
//                 // password not valid
//                     return done(null, false);
//                 }
//                 // valid password, return user
//                     return done(null, user);
//                 } catch (error) {
//                 // error searching for user
//                     return done(error);
//                 }
//             }
//         ));

// export {registerNewUser, logInUser};