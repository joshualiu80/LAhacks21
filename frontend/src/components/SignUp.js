import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    const newUser = {
      fname: firstname,
      lname: lastname,
      username: username,
      password: password
    }
    console.log(newUser);
    // validation? if username already exists or if name is already in db
    // make POST req with newUser
    // reset form? or display confirmation message
    // function that closes component (probably passed in as props)
  }

  return (
    <>
      <div className="overlay"/>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
            <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={signup}>Sign Up</button>
        </form>
    </>
  )
}

export default SignUp
