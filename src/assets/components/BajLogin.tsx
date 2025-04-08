import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/bajajlogo.css";
import axios from "axios";

export default function BajLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const gotoHome = useNavigate();

  //if (email !== null && password !== null) {
  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const goTologin = (e: FormDataEvent) => {
    e.preventDefault();

    console.log("email---->" + email);
    console.log("password---->" + password);

    axios
      .get(
        "http://localhost:8080/baj/reg/search/user?email=" +
          email +
          "&password=" +
          password
      )
      .then((res) => {
        console.log("res---->" + res.data);
        if (res.data == true) {
          gotoHome("/dashb");
        } else {
          setError("Email and Password are inCorrect!!!");
        }
      });
  }
  const gotoReg = () => {
    gotoHome("/reg");
  }
  return (
    <div className="container">
      <form onSubmit={goTologin}>
        <div className="form">
          <img src="https://tse4.mm.bing.net/th?id=OIP.nfbn8O03RVhiO0QSK_s1iwHaDF&pid=Api&P=0&h=180" />
        </div>
        <br />
        <div className="moving-text">
          <strong className="marquee">
            {" "}
            Welcome to Bajaj Finance Limited...........
          </strong>
        </div>
        <br />
        <br />
        <div className="bf-axi">{error}</div>

        <div className=" mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            onChange={getEmail}
            className="form-control input_user"
            required
            placeholder="enter email"
          />
        </div>
        <div className=" mb-2">
          <label className="form-label">Password</label>
          <input
            type="password"
            required
            onChange={getPassword}
              className="form-control input_user"
            placeholder="password"
          />
        </div>
        <div className="d-flex justify-content-center mt-3 login_container">
          <button type="submit" name="button" className="btn btn-primary">
            Login
          </button>
          <a href ="/nav" ></a>
        </div>

        <br />
        <div>
          <p className="bf-pa">Don't Have Account!!! Please Register</p>
          <div className="bf-pa">
            <button
              onClick={gotoReg}
              type="button"
              name="button"
              className=" btn btn-primary"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
