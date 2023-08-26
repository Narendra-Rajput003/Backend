const Todo=require("../model/Todo");




exports.getAllTodos=async(req,res)=>{
    try {
        
        const {title,description}=req.body;

        const response=await Todo.find({});

        res.status(200).json({
            success:true,
            message:"All todos fetched successfully",
            data:response
        })

    } catch (error) {
        console.log("Error during get all todos");
        console.log(error.message);
        res.status(404).json({
            success:false,
            message:"Error while fetching all todos",
        });
    }
}