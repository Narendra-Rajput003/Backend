const { response } = require("express");
const Todo=require("../model/Todo");




exports.singleTodo=async(req,res)=>{
    try {

        const id=req.params.id;

        const reponse=await Todo.findById({_id:id});
        if(!reponse){
            res.status(404).json({
                success:false,
                message:"id not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"data fetched successfully",
            data:reponse,
        })
        
    } catch (error) {
        console.log("error fetch single todo");
        res.status(500).json({
            success:false,
            message:"can't fetch single todo",
        });
    }
}