import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
const [formData,setFormData] = useState({})
const navigate = useNavigate()
function handleChange(e) {
let name = e.target.name
let value = e.target.value
setFormData({...formData, [name]:value})
}

async function handleLogin(e) {
e.preventDefault()
const url = "http://localhost:3000/login"
const {data} =  await axios.post(url,formData)
console.log(data)
localStorage.setItem("user", JSON.stringify(data.user))
localStorage.setItem("jwt", data.jwt)
navigate("/dashboard")
let user = localStorage.getItem("user")
let token = localStorage.getItem("jwt")
console.log(user,token)
}

  return (
    <div>
        <form onSubmit={handleLogin}>
            <div>
                <label>email</label>
                <input onChange={(e)=>handleChange(e)} type="email" name="email" />
            </div>
            <div>
                <label>password</label>
                <input onChange={(e)=>handleChange(e)} type="password" name='password'/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login