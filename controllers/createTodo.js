const Todo=require("../model/Todo");



exports.createTodo=async(req,res)=>{
    try {
        const {title,description}=req.body;

   const response= await Todo.create({title,description});

   res.status(200).json({
    success:true,
    message:"Todo created successfully",
    data:response
   });
    } catch (error) {
        console.log("Error during create todo");
        console.log(error.message);
        res.status(500).json({
            status:false,
            message:"Todo is not created"
        });
    }

}