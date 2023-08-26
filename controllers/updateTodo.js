const { response } = require("express");
const Todo=require("../model/Todo");




exports.updateTodo=async(req,res)=>{
    try {

        const {id}=req.params;
        const {title,description}=req.body;

        const response=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
            {new:true}
        );

        res.status(200).json({
            success:true,
            message:"update successfully",
            data:response,
        })
        
    } catch (error) {
        console.log("error update todo");
        res.status(500).json({
            success:false,
            message:"can't update todo",
        });
    }
}