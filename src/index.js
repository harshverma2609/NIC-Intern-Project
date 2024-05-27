import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import About from "./components/AboutRajyaSabha";
import Chairman from "./components/Chairman";
import DeputyChairman from "./components/DeputyChairman";
import LeaderOfHouse from "./components/LeaderOfHouse";
import LeaderOfOpposition from "./components/LeaderOfOpposition";
import CurrentMemberSearch from "./components/CurrentMemberSearch";
import FormerMemberSearch from "./components/FormerMemberSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/NIC-Intern-Project' element={<HomePage/>} />
        <Route path='/NIC-Intern-Project/main' element={<MainPage/>} />
        <Route path='/NIC-Intern-Project/main/AboutRajyaSabha' element={<About/>} />
        <Route path='/NIC-Intern-Project/main/AboutChairman' element={<Chairman/>} />
        <Route path='/NIC-Intern-Project/main/DeputyChairman' element={<DeputyChairman/>} />
        <Route path='/NIC-Intern-Project/main/LeaderOfHouse' element={<LeaderOfHouse/>} />
        <Route path='/NIC-Intern-Project/main/LeaderOfOpposition' element={<LeaderOfOpposition/>} />
        <Route path='/NIC-Intern-Project/main/CurrentMemberSearch' element={<CurrentMemberSearch/>} />
        <Route path='/NIC-Intern-Project/main/FormerMemberSearch' element={<FormerMemberSearch/>} />
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

