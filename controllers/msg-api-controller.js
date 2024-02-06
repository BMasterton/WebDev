
import messageSchema from "/home/student/ics221-labs/lab-2/ics221-mb-api/models/message-schema.js";


const messages = [
    { id: 0, name: 'Bill', msgText: 'Hi All!' },
    { id: 1, name: 'Ann', msgText: 'ICS 211 is fun!' },
    { id: 2, name: 'Johnny', msgText: `I'm stranded!` },
    { id: 3, name: 'Barb', msgText: 'Hi' },
    { id: 4, name: 'Frank', msgText: `Who's tired?` },
    { id: 5, name: 'Sarah', msgText: 'I Heart React' },
];


// GET Request Handler
const getAllMessages = (req, res) => {
    try { 
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
   
};

    // POST Request Handler
const addNewMessage = async (req, res) => {
    // res.status(200).send('Successful API POST Request');

    try {
        let message = await messageSchema.validate(req.body);
        message.id = messages.length;
        messages.unshift(message)
        res.status(201).json(message);
        console.log(messages);
        // TODO: add message as first element of array and
        // respond with '201 Created' Status Code and
        //the message, as JSON, in the body of the response.
        } catch (err) {
        res.status(400).send('Bad Request. The message in the body of the \ Request is either missing or malformed.');
        }
    };


export { getAllMessages, addNewMessage };