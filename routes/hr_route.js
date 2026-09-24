let express = require('express');
let router = express.Router();
let {users}=require('../models/users');
let{tasks}=require('../models/tasks');
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);
});
router.post("/assign-task",async(req,res)=>{
    let data=req.body;
    let newTask=new tasks(data);
    let result =await newTask.save();
    res.send(result);
});
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks route");
});
router.delete("/deleteEmp/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted success");
    }else{
        res.send("no user found");
    }
});

// localhost:3000/api/employee/viewtasks GET
module.exports=router;