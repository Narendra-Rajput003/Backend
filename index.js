const express=require('express');  //to create the server with the help of express
const app=express();


const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);   /// listen the port 3000
});

//middleware for parse the data in body-parse to json formate
app.use(express.json());

//import routes for todo API

const todosRoutes=require("./routes/todos");
//mount the API routes 
app.use("/api/v1",todosRoutes);


//db connection

const dbConnect=require('./config/database');
dbConnect();