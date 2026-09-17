let express = require('express');
let router = express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});
router.post("/assign-task",(req,res)=>{
    res.send("Assign tasks route");
});
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks route");
});
router.delete("/deleteEmp",(req,res)=>{
    res.send("Delete employees route");
});
// localhost:3000/api/employee/viewtasks GET
module.exports=router;