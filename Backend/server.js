const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://kunal_attendance:pldzcykpnHQL3CTW@attendance06.kr1rvt2.mongodb.net/?retryWrites=true&w=majority&appName=attendance06',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})

connectdb();

const connectdb = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());
const authpasscode = require('./routes/authpasscode');

//api url 
app.use('/api', authpasscode);


// app.get('/', (req,res)=>{
//     res.send('server is running...');
// });





const PORT = process.env.PORT || 6700 
app.listen(PORT, () => console.log(`server running port ${PORT}`));