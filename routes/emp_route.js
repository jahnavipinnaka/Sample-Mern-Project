let express = require('express');
let router = express.Router();
router.post("/register",(req,res)=>{
    res.send("Register route");
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
// localhost:3000/api/hr/viewtasks GET
module.exports=router;