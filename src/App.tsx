import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserReg from "./assets/components/UserReg";
import DashBoard from "./assets/components/DashBoard";
import BajLogin from "./assets/components/BajLogin";
import Profile from "./assets/components/Profile";
import Investments from "./assets/components/Investments";
import SideBar from "./assets/components/SideBar";
import AllLoans from "./assets/components/AllLoans";
import SideBars from "./assets/components/SideBars";
import Loans from "./assets/components/Loans";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BajLogin />} />
          <Route path="/reg" element={<UserReg />} />
          <Route path="/allloans" element={<AllLoans />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/dashb" element={<DashBoard />} />
          <Route path="/pro" element={<Profile />} />
          <Route path="/sdbars" element={<SideBars/>} />
          <Route path="/invest" element={<Investments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
