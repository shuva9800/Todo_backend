const express = require('express');
require("dotenv").config();
const userroute = require('./routes/userRoutes')
const todoroutes = require('./routes/todoRoutes')
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//database connection
const{dbconnect} =require('./config/database');
dbconnect()

app.listen(PORT , ()=> {
    console.log(`app started at port ${PORT}`);
});
app.get('/', (req, res)=>{
    return res.status(200).json({
        success:true,
        message:'wellcome to home page'
    })
})
app.use('/api/users', userroute);
app.use('/api/todos',todoroutes);