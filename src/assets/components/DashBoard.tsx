import React from "react";
import "../../css/dashBoard.css";
import { useNavigate } from "react-router-dom";
export default function DashBoard() {
  const goLoan = useNavigate();
  goLoan("/loans");
  return (
    <div>
      <div className="side-menu">
        <div className="brand-name">
          <h1>
            {" "}
            <strong
              style={{ font: "-moz-initial", color: "white", fontSize: "35px" }}
            >
              Bajaj Finserv
            </strong>
          </h1>
        </div>
        <ul>
          <li>
            <span>Home</span>{" "}
          </li>
          <li>
            {" "}
            <span>Dashboard</span>{" "}
          </li>

          <li>
            <a href="/loans" >
             <span>Loans</span> {""}
             </a>
          </li>

          <li>
            <span>Investments</span>{" "}
          </li>
          <li>
            <span>Profile</span>{" "}
          </li>

          <li>
            {" "}
            <span>Help</span>
          </li>
          <li>
            <span>Settings</span>{" "}
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="Search.." />
              <button type="submit"></button>
            </div>
            <div className="user">
              <a href="#" className="btn">
                Add New
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">
              <div className="box">
                <h1>233</h1>
                <h3>Customers</h3>
              </div>
              <div className="icon-case"></div>
            </div>
            <div className="card">
              <div className="box">
                <h1>220 </h1>
                <h3>Loan Requesters</h3>
              </div>
              <div className="icon-case"></div>
            </div>
            <div className="card">
              <div className="box">
                <h1>120</h1>
                <h3>Loans Aprroved</h3>
              </div>
              <div className="icon-case"></div>
            </div>
            <div className="card">
              <div className="box">
                <h1>100</h1>
                <h3>Loans Pending </h3>
              </div>
              <div className="icon-case"></div>
            </div>
            <div className="card">
              <div className="box">
                <h1>13</h1>
                <h3>Loans Rejected </h3>
              </div>
              <div className="icon-case"></div>
            </div>
          </div>
          <div className="content-2">
            <div className="recent-payments">
              <div className="title">
                <h2>Recent Payments</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>type of loan</th>
                  <th>loan amount</th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>Shiva </td>
                  <td> Car loan </td>
                  <td>₹6,00,000</td>
                  <td>
                    <a href="#" className="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td> Abhi </td>
                  <td>Electronics </td>
                  <td>₹1,00,000</td>
                  <td>
                    <a href="#" className="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Muni</td>
                  <td>Home</td>
                  <td>₹5,00,000</td>
                  <td>
                    <a href="#" className="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Krishna </td>
                  <td> Education</td>
                  <td>₹8,00,000</td>
                  <td>
                    <a href="#" className="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Geetha</td>
                  <td> Business Loan </td>
                  <td>₹10,00,000</td>
                  <td>
                    <a href="#" className="btn">
                      View
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div className="new-students">
              <div className="title">
                <h2>New Students</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>option</th>
                </tr>
                <tr>
                  <td> Bajaj Manager </td>
                </tr>
                <tr>
                  <td> Bajaj Manager </td>
                </tr>
                <tr>
                  <td> Bajaj Manager </td>
                </tr>
                <tr>
                  <td> Bajaj Manager </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
