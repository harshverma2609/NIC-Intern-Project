import React from "react";
import './mainPage.css';
import { useNavigate } from "react-router-dom";

const MainPage=()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/NIC-Intern-Project/main/AboutRajyaSabha");
    };
    const ChairmanClick=()=>{
        navigate("/NIC-Intern-Project/main/AboutChairman");
    };
    const DeputyChairmanClick=()=>{
        navigate("/NIC-Intern-Project/main/DeputyChairman");
    };
    const LeaderOfHouseClick=()=>{
        navigate("/NIC-Intern-Project/main/LeaderOfHouse");
    };
    const LeaderOfOppositionClick=()=>{
        navigate("/NIC-Intern-Project/main/LeaderOfOpposition");
    };
    const CurrentMemberSearchClick=()=>{
        navigate("/NIC-Intern-Project/main/CurrentMemberSearch");
    };
    const FormerMemberSearchClick=()=>{
        navigate("/NIC-Intern-Project/main/FormerMemberSearch");
    };

    return (
        <div>
            <div className="top-left">
                <img className="nationalEmblem" onClick={handleClick} src={require("./images/Emblem_of_India.png")} alt="National Emblem of India"/>
                <div className="heading" onClick={handleClick}>
                    <p id="hindiHeading">राज्य सभा</p>
                    <p id="mainHeading">RAJYA SABHA</p>
                    <p id="subHeading">COUNCIL OF STATES</p>
                    <hr id="line"/>
                </div>
            </div>
            <div className="grid">
                <div className="bottom-left">
                    <img id="nrsFull" src={require("./images/nrsfull.png")} alt="nrsFull"/>
                </div>
                <div className="center">
                    <div className="left-curve" onClick={ChairmanClick}>
                        <div className="column">
                            <img id="picture" src={require("./images/Shri_Jagdeep_Dhankar.jpg")} alt="minister"/>
                            <div>
                                <h2 id="name">SHRI JAGDEEP DHANKHAR</h2>
                                <h4 id="designation">HON'BLE CHAIRMAN | RAJYA SABHA</h4>
                            </div>
                        </div>
                        <div id="left-curve-line"></div>
                    </div>
                    <div className="right-curve" onClick={DeputyChairmanClick}>
                        <div className="column">
                            <div>
                                <h2 id="name">SHRI HARIVANSH</h2>
                                <h4 id="designation">HON'BLE DEPUTY CHAIRMAN | RAJYA SABHA</h4>
                            </div>
                            <img id="picture" src={require("./images/Shri_Harivansh.jpg")} alt="minister"/>
                        </div>
                        <div id="right-curve-line"></div>
                    </div>
                    <div className="left-curve" onClick={LeaderOfHouseClick}>
                        <div className="column">
                            <img id="picture" src={require("./images/Shri_Piyush_Goyal.jpg")} alt="minister"/>
                            <div>
                                <h2 id="name">SHRI PIYUSH GOYAL</h2>
                                <h4 id="designation">LEADER OF THE HOUSE | RAJYA SABHA</h4>
                            </div>
                        </div>
                        <div id="left-curve-line"></div>
                    </div>
                    <div className="right-curve" onClick={LeaderOfOppositionClick}>
                        <div className="column">
                            <div>
                                <h2 id="name">SHRI MALLIKARJUN KHARGE</h2>
                                <h4 id="designation">LEADER OF THE OPPOSITION | RAJYA SABHA</h4>
                            </div>
                            <img id="picture" src={require("./images/Shri_Mallikarjun_Khagre.jpg")} alt="minister"/>
                        </div>
                        <div id="right-curve-line"></div>
                    </div>
                </div>
                <div className="searchBox">
                    <h2 onClick={CurrentMemberSearchClick}>SITTING MEMBERS OF RAJYA SABHA</h2>
                    <h2 onClick={FormerMemberSearchClick}>FORMER MEMBERS OF RAJYA SABHA</h2>
                    <div id="search">
                        <input id="searchInput" type="text" placeholder="Search Member Info"/>
                        <button type="submit"><img id="searchIcon" src={require("./images/search Icon.png")} alt="search button"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;