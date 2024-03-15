import React, { useState } from "react";
import { Link } from 'react-router-dom';
import maskg from './maskg.png';
import rescounts from './rescounts.png';
import canda from './canda.png';

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");

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
      window.location.href = "/Login";
    } else {
      setMessage(data.message);
    }
  };
  return (
    <div className="container ">
            <img src={rescounts} alt="" className=""/>
      <p className=" m-2 fw-bold fs-4">Create Account</p>
      <div className="d-flex">
      <span className="fw-bold ">Already have account? </span><Link className="nav-link active fw-bold text-decoration-underline text-danger"  to="/Login">Login</Link> </div>

      <div className=" d-flex flex-row justify-content-between align-items-center">
        <div>
    <form onSubmit={handleSubmit} className="w-100 position-relative">  
      <label htmlFor="email" className="fw-bolder">Email</label><br></br>
      <input
              className="p-2 rounded-3 opacity-25 w-100"

        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />


< div className="d-flex mt-2">
  <div className="">
<label htmlFor="firstName" className="fw-bold">First Name</label><br></br>
      <input
            className="p-2 rounded-3 opacity-25  w-75 "

        type="firstName"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      /></div>

<div className="">
<label htmlFor="lastName" className="fw-bold">Last Name</label><br></br>
      <input
            className="p-2 rounded-3 opacity-25 w-75"

        type="lastName"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      /></div>
</div>

<div className="mt-2">
      <label htmlFor="password" className="fw-bold">Password</label><br></br>
      <input
            className="p-2 rounded-3 opacity-25 w-100"

        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength="8"
        required
      /></div>

<div className="mt-2">
<label htmlFor="city "className="fw-bold">City</label><br></br>
      <input
            className="p-2 rounded-3 opacity-25 w-100"

        type="city"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      /></div>
       
       <div className="d-flex mt-2 ">
      <div className="">
<label htmlFor="country" className="fw-bold">Country </label> <br></br>
<div className="position-absolute">
<img src={canda} alt="" className="ms-2 mt-2"/></div>
      <input
            className="p-2 rounded-3 opacity-25 w-75 "
            placeholder=""
        type="country"
        id="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        required
      

      /> </div>

      <div className="">
       <label htmlFor="mobile" className="fw-bold">Mobile</label><br></br>
      <input
      className="p-2 rounded-3 opacity-25 w-75"
        type="mobile"
        id="mobile"
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
        required
      

      /></div></div>



       <div className=" text-center">
      <button type="submit" className="fw-bold w-50 btn btn-warning p-2 m-2 rounded-3  ">Register</button></div>
      {message && <p>{message}</p>}
    </form></div>

    <div className="">
    <img src={maskg} alt="" className="  m-auto img-fluid"width={400} />
    </div>

</div></div>
  );
  
};
export default Register;
