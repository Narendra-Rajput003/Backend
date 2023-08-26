const express=require('express');
const router=express.Router();


const {createTodo}=require("../controllers/createTodo");
const {getAllTodos}=require("../controllers/getallTodos");
const {singleTodo}=require("../controllers/singleTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getallTodos",getAllTodos);
router.get("/singleTodo/:id",singleTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;