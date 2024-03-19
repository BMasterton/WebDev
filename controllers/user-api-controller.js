import mongoose from 'mongoose';

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

export {registerNewUser};