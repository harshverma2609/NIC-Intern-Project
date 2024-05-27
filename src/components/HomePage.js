import React, {useEffect} from "react";
import './homePage.css';
import {useNavigate} from 'react-router-dom';
import backGround from './images/npb.png';

const number=1952;
const d=new Date();
const year=d.getFullYear();

const HomePage=()=>{

    // TO HAVE SPECIFIC BACKGROUNF IMAGE IN HOMEPAGE
    useEffect(()=>{
        document.body.style.backgroundImage=`url(${backGround})`;
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundPositio='center';
    
        return ()=>{
            document.body.style.backgroundImage='';
        };
    }, []);

    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/main");
    };

    return (
    <div className="click" onClick={handleClick}>
        <div className="top-left-home">
            <img className="nationalEmblem-home" src={require("./images/Emblem_of_India.png")} alt="National Emblem of India"/>
            <div className="heading-home">
                <p id="hindiHeading-home">राज्य सभा</p>
                <p id="mainHeading-home">RAJYA SABHA</p>
                <p id="subHeading-home">COUNCIL OF STATES</p>
                <hr id="line-home"/>
            </div>
        </div>
        <div className="bottom-right">
            <h3>Member's Profile</h3>
            <h3>{number} - {year}</h3>
        </div>
    </div>
    );
}

export default HomePage;