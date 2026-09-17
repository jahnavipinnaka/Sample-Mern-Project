let express = require('express');
let router = express.Router();
let {users}=require('../models/users');
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newuser = users(req.body);
    let result =await newuser.save();
    res.send(result);
});
router.post("/login",(req,res)=>{
    res.send("Login route");
});
router.get("/viewtask",(req,res)=>{
    res.send("View tasks route");
});
router.put("/updatestatus",(req,res)=>{
    res.send("Update status route");
});
// localhost:3000/api/emp/viewtasks GET
module.exports=router;