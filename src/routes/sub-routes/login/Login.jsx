import { useRef, useState } from "react"
import "./Login.scss"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
    const submitBtn = useRef()
    const sbtBtn = submitBtn.current
    
const handleLoginUser = (e) => {
    e.preventDefault()
    window.location.pathname = "/"    
}

  
  return (
    <div className="form-backdrop">
    <form onSubmit={handleLoginUser}  className="form-container">
      <h1>LOGIN</h1>
      <input onChange={(e) => setEmail(e.target.value)} autoComplete="off" type="email" id="email" name="email" placeholder="Enter email" className="form-control" />
      <input onChange={(e) => setPassword(e.target.value)} autoComplete="off" type="password" id="password" name="password" placeholder="Enter password" className="form-control" />
      <button ref={submitBtn} type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
  )
}

export default Login