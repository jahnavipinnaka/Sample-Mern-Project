import { useState } from "react"
function Contact(){
    let [name,setName]=useState("")
    let [age,setAge]=useState(18)
    let [emailid,setEmailid]=useState("")
    let [colname,setColname]=useState("VFSTR")
    // function for on submit
    let RegisterForm = (event)=>{
        event.preventDefault();
        console.log(name);
    }
    return(
        <div>
            <h1>Contact page called</h1>
            <form onSubmit={RegisterForm}>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input>
                <br/>
                <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age"></input>
                <br/>
                <input type="email" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder="Enter your emailid"></input>
                <br/>
                <input type="text" value={colname} onChange={(e)=>setColname(e.target.value)} placeholder="Enter college name"></input>
                <br/>
                <button type="Submit">Register</button>
            </form>
            <p>{name}</p>
            <p>{age}</p>
            <p>{emailid}</p>
            <p>{colname}</p>
        </div>
    )
}
export default Contact