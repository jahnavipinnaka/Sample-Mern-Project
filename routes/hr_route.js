let express = require('express');
let router = express.Router();
let {users}=require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);
});
router.post("/assign-task",(req,res)=>{
    res.send("Assign tasks route");
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