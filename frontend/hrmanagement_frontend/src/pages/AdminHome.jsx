function AdminHome(){
    let currentuser=JSON.parse(localStorage.getItem("currentuser"));    
    return(<div>
        <h1>Welcome {currentuser.name}</h1>
    </div>)
}
export default AdminHome