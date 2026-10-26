import { useState } from "react";
function Register()
{
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [role,setRole]=useState("");
    let handleRegister=async(event)=>{
        event.preventDefault();
        let  req=await fetch("http://localhost:3000/api/emp/register",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,email,password,role})
            });
        let data=await req.json();
        if(req){
            console.log("Data inserted success");
            console.log(data);
        }else{
            console.log("Data insertion failed");
            console.log(data);
        }
    }
    return (<div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input type="text"
            onChange={(event)=>setName(event.target.value)}
            value={name} 
            placeholder="Enter name"></input><br/>
            <input type="email"
            onChange={(event)=>setEmail(event.target.value)}
            value={email} 
            placeholder="Enter emailid"></input><br/>
            <input type="password"
            onChange={(event)=>setPassword(event.target.value)}
            value={password} 
            placeholder="Enter password"></input><br/>
            <select onChange={(event)=>setRole(event.target.value)}
                value={role}>
                <option value="">Choose role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
            </select><br/>
            <button type="submit">Register</button>
        </form>
    </div>)
}
export default Register