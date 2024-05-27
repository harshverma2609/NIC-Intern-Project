import React from "react";
import { useNavigate } from "react-router-dom";
import './MemberSearchList.css';

const CurrentMemberSearch=()=>{
    const navigate=useNavigate();
    return (
        <div>
            <div className="right">
                <img id="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div className="topOfPage">
                <img id="embelem" src={require("./images/Emblem_of_India.png")} alt="embelem of india"/>
                <h1 id="heading">SITTING MEMBERS OF RAJYA SABHA</h1>
                <div className="searchBoxHolder">
                    <input id="txtSearch" type="search" placeholder="Search..." onkeydown="return event.key != 'Enter';"/>
                </div>
                <p>total no of members:- 240</p>
            </div>
        </div>
    );
}

export default CurrentMemberSearch;
