import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AdminLogin(){
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let [error,setError] = useState("")
    let navigate = useNavigate()
    // function for onsubmit
    let login=(event)=>{
        event.preventDefault()
        // it only collects all the inputs from the form
        if(username=="admin"& password=="admin"){
            console.log("login success")
            navigate("/adminhome")
        }else{
            console.log("login failed")
            setError("invalid credentials")
        }
    }
    return(
        <div>
            <form  onSubmit={login}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username"></input><br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"></input><br/>
                <button type="submit">Admin Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default AdminLogin