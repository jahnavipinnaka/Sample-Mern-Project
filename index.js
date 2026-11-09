let express = require("express");
let cors = require('cors');
let app = express();
let hrroutes = require('./routes/hr_route');
let emproutes = require('./routes/emp_route');
let mongoose=require('mongoose');

app.use(cors())
let port=process.env.PORT || 3000;

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);
// run the server
app.listen(port,"0.0.0.0",()=>{
    console.log("server listening on port 3000")
})