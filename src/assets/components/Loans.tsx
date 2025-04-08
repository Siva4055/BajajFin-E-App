import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Loans() {
    const [pan, setPan] = useState("");
    const [name, setName] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const [loan, setLoan] = useState("");
    const [mobile , setMobile] = useState("");
    const [address, setAddress] = useState("");
  
  
    const goNav = useNavigate();
  
     
    const gotoLoans = (e: FormDataEvent) => {
      e.preventDefault();
      console.log("submit clicked....");
      console.log("PAN---->" + pan);
      console.log("fullname--->" + name);
      console.log("aadhaar-->" + aadhaar);
      console.log("Loan Type-->" + loan);
      console.log("Mobile Number--->" + mobile);
      console.log("Address--->" +address );
      
  
      const userjson = { pan, name, aadhaar, loan,mobile,address};
  
      axios.post("http://localhost:8080/baj/loan/add/user", userjson).then((res) => {
        console.log("res--->" + res.data);
       console.log("entered successfully,redirects to manager");
       goNav("/loans");
  
    
      });
    };
  
    const getPan = (e: any) => {
        setPan(e.target.value);
      };
    const getName = (e: any) => {
      setName(e.target.value);
    };
    const getAadhaar = (e: any) => {
      setAadhaar(e.target.value);
    };
    const getLoan = (e: any) => {
        setLoan(e.target.value);
      };
      
    const getMobile = (e: any) => {
      setMobile(e.target.value);
    };
    const getAddress = (e: any) => {
        setAddress(e.target.value);
      };

  
    return (
      <div className="container">
        <form onSubmit={gotoLoans} >
          <br />
          <div className="moving-text">
          <strong className="marquee">Welcome to Bajaj Finance Limited</strong> 
          </div>
          <br />
          <div>
          <h2>Personal Details for Loan</h2>
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">PAN Card</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter FullName" 
               onChange={getPan}
               required
            />
          </div>
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
            <label className="form-label">Aadhaar</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Aadhaar number"
              onChange={getAadhaar}
              required
            />
          </div >
          <div className="mb-3" >
        <label>Choose Loan type</label>
        <br />
         <select name="loans" id="loans" required >
         <option value="" disabled selected>Loan Type</option>
          <option value="volvo">CarLoan</option>
          <option value="saab">BikeLoan</option>
           <option value="opel">HomeLoan</option>
          <option value="audi">BusinessLoan</option>
            
           </select>
       
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
          <div className="mb-3">
            <label className="form-label">Address </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              onChange={getAddress}
              required
            />
          </div>
        
          <button type="submit" className="btn btn-primary">
          Submit
          </button>
        </form>
      </div>
    );
  }