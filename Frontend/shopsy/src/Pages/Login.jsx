import React, { useState } from 'react'
import './Css/Login.css'

function Login() {
  const [status, setstatus] = useState("Login");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  })
  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  const login = async() => {
    console.log("Login done", data);

    let finalresponse;

    await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json()).then((val) => { finalresponse = val });

    if (finalresponse.success) {
      localStorage.setItem('auth', finalresponse.token);
      window.location.replace("/"); 
    }
    else {
      alert(finalresponse.error);
    }
  }
  const signup = async () => {
    console.log("Signin done", data);
    let finalresponse;

    await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json()).then((val) => { finalresponse = val });

    if (finalresponse.success) {
      localStorage.setItem('auth', finalresponse.token);
      window.location.replace("/");
    }
    else {
      alert(finalresponse.error);
    }
  }
  return (
    <div className='loginsignup'>
      <div className="logsign">
        <h1>{status}</h1>
        <div className="details">
          {status === "SignUp" ? <input type='text' name='name' value={data.name} onChange={change} placeholder='Your Name'></input> : <></>}
          <input type='email' name='email' value={data.email} onChange={change} placeholder='Your Email'></input>
          <input type='password' name='password' value={data.password} onChange={change} placeholder='Your Password'></input>
        </div>
        <button onClick={() => { status === 'Login' ? login() : signup() }}>Continue</button>
        {status === 'SignUp' ? <p className='loginonly'>Already have an account? <span onClick={() => { setstatus('Login') }}>Login here</span></p> : <p className='loginonly'>Create an account?<span onClick={() => { setstatus('SignUp') }}>Click here</span></p>}
        <div className="verify">
          <input type='checkbox' name='' id=''></input>
          <p>By continuing,I agree to the terms of use & privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default Login
