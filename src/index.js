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
        <Route path='/' element={<HomePage/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/main/AboutRajyaSabha' element={<About/>} />
        <Route path='/main/AboutChairman' element={<Chairman/>} />
        <Route path='/main/DeputyChairman' element={<DeputyChairman/>} />
        <Route path='/main/LeaderOfHouse' element={<LeaderOfHouse/>} />
        <Route path='/main/LeaderOfOpposition' element={<LeaderOfOpposition/>} />
        <Route path='/main/CurrentMemberSearch' element={<CurrentMemberSearch/>} />
        <Route path='/main/FormerMemberSearch' element={<FormerMemberSearch/>} />
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

