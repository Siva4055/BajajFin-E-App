import axios from "axios";
import React, { useEffect, useState } from "react";

interface bfloan {
  pan:string 
  name: string;
  aadhaar: string;
  loan: number;
  mobile: string;
  address :string;
}

export default function AllLoans() {
  const [loansData, setLoansData] = useState<bfloan[]>([]);

  useEffect(() => {
    axios
      .get<bfloan[]>("http://localhost:8080/baj/loan/get/all")
      .then((res) => {
        setLoansData(res.data);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Aadhaar</th>
            <th scope="col">PAN</th>
            <th scope="col">Loan Type</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {loansData.map((eachLoan) => (
            <tr>
              <th>{eachLoan.name}</th>
              <th>{eachLoan.aadhaar}</th>
              <th>{eachLoan.pan}</th>
              <th>{eachLoan.loan}</th>
              <th>{eachLoan.mobile}</th>
              <th>{eachLoan.address}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
