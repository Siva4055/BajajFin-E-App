import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UserReg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");


  const goNav = useNavigate();

   
  const gotoReg = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("submit clicked....");
    console.log("fullname--->" + name);
    console.log("email--->" + email);
    console.log("password--->" + password);
    console.log("Mobile Number--->" + mobile);

    const userjson = { email, name, password, mobile};

    axios.post("http://localhost:8080/baj/reg/add/user", userjson).then((res) => {
      console.log("res--->" + res.data);
     console.log("registered successfully,redirects to login");
     goNav("/");

  
    });
  };

  
  const getName = (e: any) => {
    setName(e.target.value);
  };
  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const getMobile = (e: any) => {
    setMobile(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={gotoReg} >
        <div className="form">
          <img src="https://tse4.mm.bing.net/th?id=OIP.nfbn8O03RVhiO0QSK_s1iwHaDF&pid=Api&P=0&h=180" />
        </div>
        <br />
        <div className="moving-text">
        <strong className="marquee">Welcome to Bajaj Finance Limited</strong> 
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter FullName" 
             onChange={getName}
             required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={getEmail}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={getPassword}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={getMobile}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"  required/>
          <label className="form-check-label" >Terms and conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">
         Register
        </button>
      </form>
    </div>
  );
}
