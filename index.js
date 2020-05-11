const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//routes
const student = require('./routes/student');
app.use('/student',student);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

const uri = process.env.mongodb || 'mongodb://localhost:27017/studentData';
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex : true
    
},(err)=>{
    if(err){
        process.exit(1);
        console.log('unable to connect to database');
    }
    else
        console.log('MongoDB successfully connected');   
});

const port = process.env.PORT || 6000;  
app.listen(port,()=>{
    console.log(`Server started successfully  on port ${port}`);    
});