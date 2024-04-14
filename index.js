const express=require('express'); 
const dbConnect=require('./config/database');//to create the server with the help of express
const todosRoutes=require("./routes/todos");
const app=express();



const PORT=process.env.PORT || 4000;


//middleware for parsing the data in body-parse to JSON format
app.use(express.json());

//import routes for todo API

dbConnect();


//mount the API routes 
app.use("/api/v1",todosRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);   /// listen the port 3000
});

