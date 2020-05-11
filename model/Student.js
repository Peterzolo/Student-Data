const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    
    surname :{
        type : String,
        required : true
    },
    firstName :{
        type : String,
        required : true
    },
    middleName :{
        type : String,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    phone :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    admissionNum :{
        type : String,
        required : true
    },
    course :{
        type : String,
        required : true
    },
    faculty :{
        type : String,
        required : true
    },
    department :{
        type : String,
        required : true
    }
   
});

module.exports = mongoose.model('Student',StudentSchema);