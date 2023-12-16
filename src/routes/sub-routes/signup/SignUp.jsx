import { useLocation } from "react-router-dom"
import "./SignUp.scss"
import { useEffect, useRef, useState } from "react"



const SignUp = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  const submitBtn = useRef()
  const sbtBtn = submitBtn.current


  const handleRegisterUser = (e) => {
    e.preventDefault()
    let newUser = {
      username, email, number, password
    }
    if (username.trim().length !== 0) {
      localStorage.setItem("user", JSON.stringify(newUser))
      sbtBtn.classList.add('submitBtnstyle')
      setTimeout(() => {
        window.location.pathname = "/login"
      }, 1700)
    }
    console.log(newUser);
  }

  return (
    <div className="form-backdrop">
      <form onSubmit={handleRegisterUser} className="form-container">
        <h1>SIGN UP</h1>
        <input onChange={(e) => setUsername(e.target.value)} autoComplete="off" type="text" id="username" name="username" placeholder="Enter username" className="form-control" />
        <input onChange={(e) => setEmail(e.target.value)} autoComplete="off" type="email" id="email" name="email" placeholder="Enter email" className="form-control" />
        <input onChange={(e) => setNumber(e.target.value)} autoComplete="off" type="number" id="number" name="number" placeholder="Enter number" className="form-control" />
        <input onChange={(e) => setPassword(e.target.value)} autoComplete="off" type="password" id="password" name="password" placeholder="Enter password" className="form-control" />
        <button ref={submitBtn} type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default SignUp