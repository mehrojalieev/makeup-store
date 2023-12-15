import { useLocation } from "react-router-dom"
import "./SignUp.scss"
import { useEffect } from "react"

const SignUp = () => {
  return (
    <div className="form-backdrop">
    <form  className="form-container">
      <h1>SIGN UP</h1>
        <input autoComplete="off" type="text" id="username" name="username" placeholder="Enter username" className="form-control"/>
        <input autoComplete="off" type="email" id="email" name="email" placeholder="Enter email" className="form-control"/>
        <input autoComplete="off" type="password" id="password" name="password" placeholder="Enter password" className="form-control"/>
        <input autoComplete="off" type="number" id="number" name="number" placeholder="Enter number" className="form-control"/>
        <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
  )
}

export default SignUp