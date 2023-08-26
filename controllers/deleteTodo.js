const { response } = require("express");
const Todo=require("../model/Todo");




exports.deleteTodo=async(req,res)=>{
    try {

        const {id}=req.params;
        const response=Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"delete successfully",
        })
        
    } catch (error) {
        console.log("error delete todo");
         res.status(500).json({
            success:false,
            message:"can't delete todo",
        });
    }
}