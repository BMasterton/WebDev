import mongoose from 'mongoose';
//import messageSchema from "/home/student/ics221-labs/lab-2/ics221-mb-api/models/message-schema.js";

const messageModel = mongoose.model('message');

// const messages = [
//     { id: 0, name: 'Bill', msgText: 'Hi All!' },
//     { id: 1, name: 'Ann', msgText: 'ICS 211 is fun!' },
//     { id: 2, name: 'Johnny', msgText: `I'm stranded!` },
//     { id: 3, name: 'Barb', msgText: 'Hi' },
//     { id: 4, name: 'Frank', msgText: `Who's tired?` },
//     { id: 5, name: 'Sarah', msgText: 'I Heart React' },
// ];


// GET Request Handler
const getAllMessages = async (req, res) => {
    try { 
        let messages = await messageModel.find({}, '', {sort: {_id: -1}}).exec();
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
   
};

    // POST Request Handler
const addNewMessage = async (req, res) => {
    // res.status(200).send('Successful API POST Request');

    try {
        //let message = await messageSchema.validate(req.body);
        //message.id = messages.length;
        //messages.unshift(message)
        let message = await messageModel.create(req.body);
        res.status(201).json(message);
        //console.log(messages);
        } catch (err) {
        res.status(400).send('Bad Request. The message in the body of the \ Request is either missing or malformed.');
        }
    };


export { getAllMessages, addNewMessage };