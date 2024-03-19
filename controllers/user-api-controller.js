import mongoose from 'mongoose';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';


const userModel = mongoose.model('user');


const alreadyExists = async ( email, username ) => (
    await userModel.exists({
    '$or': [
    { email: email },
    { username: username }
    ]
    })
    );

const registerNewUser = async (req, res) => {

try {
    if( await alreadyExists(req.body.email, req.body.username)){
        res.status(423).send("Forbidden - Username or Email already exists")
    } 
    else {
        let user = await userModel.create(req.body);
        res.status(201).json(user);
    }

        } catch (err) {
        res.status(400).send('Bad Request. The message in the body of the \ Request is either missing or malformed.');
        }
    }


    passport.use(new BasicStrategy(
        async (userIdent, password, done) => {
            try {
                const user = await userModel.findOne({
                    '$or': [
                        { email: userIdent },
                        { username: userIdent }
                    ]
                }).exec();
            // user wasn't found
                if (!user) return done(null, false);
                // user was found, see if it's a valid password
                if (!await user.verifyPassword(password)) {
                // password not valid
                    return done(null, false);
                }
                // valid password, return user
                    return done(null, user);
                } catch (error) {
                // error searching for user
                    return done(error);
                }
            }
        ));

export {registerNewUser};