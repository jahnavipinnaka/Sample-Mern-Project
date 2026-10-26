function Login()
{
    return (<div>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Enter emailid"></input><br/>
            <input type="password" placeholder="Enter password"></input><br/>
            <select>
                <option value="">Choose role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
            </select><br/>
            <button type="submit">Login</button>
        </form>
    </div>)
}
export default Login