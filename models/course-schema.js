import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        match: /^ICS 2\d\d$/,
        description: "Course Code (Course program and Course Number)"
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 75,
        description: "A Courses Title"
    },
    instructor: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 75,
        description: "A Courses Instructor"
    }
});

courseSchema.set('toJSON', {
    versionKey: false,
    virtuals: true,
    transform: (doc, ret) => { delete ret._id; }
    });



export default mongoose.model('course', courseSchema);