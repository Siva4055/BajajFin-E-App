import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBaj from './NavBaj';

export default function AllEntries() {
    const [bajData, setBajData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/baj/reg/get/all").then((res) => {
        setBajData(res.data);
      });
    }, []);
  
    return (
      <div>
        <NavBaj />
  
        <table className="table">
          <thead>
            <tr>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Mobile</th>
             
            </tr>
          </thead>
          <tbody>
            {bajData.map((eachRec) => (
              <tr>
                <th>{eachRec.name}</th>
                <td>{eachRec.email}</td>
                <td>{eachRec.password}</td>
                <td>{eachRec.mobile}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }