const express=require('express')

const employeeRoute=require('./routes/employee-route')

const bodyparser=require('body-parser');
const Cors=require('cors')


const app=express();

app.use(Cors());



    app.use(express.json());
    app.use(bodyparser.json());

   

    app.use('/api/employee',employeeRoute);
   module.exports=app;