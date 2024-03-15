import React, { useState } from "react";
import { Link } from 'react-router-dom';
import mask from'./mask.png';
import rescounts from'./rescounts.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://api.postman.com/collections/16130549-f5d15173-8c98-44c1-bba2-89c7636c8cda?access_key=PMAT-01HCJWQH4BFJSVXN59RQZ801AY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      setMessage(data.message);
    }
  };
  return (

    <div className="container ">
          <img src={rescounts} alt="" className=""/>
<p className="fw-bold fs-4 ">Welcome Back</p>

    <div className=" d-flex flex-row justify-content-between align-items-center">
      <div>
    <form onSubmit={handleSubmit} className="w-100 ">
      <label htmlFor="email" className=""><span className="fw-bold ">E-mail*</span><br></br>
</label>
      <input
        placeholder="ma@website.com"
        className="p-2 rounded-3 opacity-25 w-100"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      /> <br></br><br></br>
<span className="fw-bold  ">Password*</span><br></br>
      <label htmlFor="password" className=""></label>
      <input
        placeholder="min 8 character"
        className="p-2 rounded-3 opacity-25 w-100 " 
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength="8"
        required
      />
<div div className="d-flex mt-2 mb-4  ">
  <input type="checkbox" id="remember" name="remember"/>
  
  <label for="remember"><span className="fw-bold p-2 ">Remember me</span></label>
  <Link className="nav-link active ms-5 text-decoration-underline fw-bold"  to="">forget password</Link><br></br>
</div>

      <button type="submit" className="btn btn-warning fw-bold mt-2 p-2 w-75">Login</button>
      <p className="fw-bold d-flex mt-3">Not registered yet?  <Link className="nav-link active fw-bold  text-decoration-underline ms-5"  to="/Register">Create an account</Link>
</p>

      {message && <p>{message}</p>}
    </form></div>
<div className="">
    <img src={mask} alt="" className="m-auto img-fluid "width={450} />
    </div>
    </div>

</div>
  );
};
export default Login;
