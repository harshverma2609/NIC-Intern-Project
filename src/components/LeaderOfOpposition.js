import React from "react";
import { useNavigate } from "react-router-dom";
import './commonLayout.css'
import details from './LeaderOfOpposition.json'

const LeaderOfOpposition=()=>{
    const navigate=useNavigate();

    return (
        <div>
            <div className="goBack">
                <img className="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div>
                <h1 id="LeaderHeading">SHRI MALLIKARJUN KHARGE</h1>
                <h3 id="position">LEADER OF THE OPPOSITON</h3>
            </div>
            <div className="structure">
                <div className="leaderDetails">
                    <div className="partition">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name:</th>
                                    <td>{details.Name}</td>
                                </tr>
                                <tr>
                                    <th>Father's Name:</th>
                                    <td>{details.FatherName}</td>
                                </tr>
                                <tr>
                                    <th>Mother's Name:</th>
                                    <td>{details.MotherName}</td>
                                </tr>
                                <tr>
                                    <th>Date of Birth:</th>
                                    <td>{details.DateOfBirth}</td>
                                </tr>
                                <tr>
                                    <th>Place of Birth:</th>
                                    <td>{details.PlaceOfBirth}</td>
                                </tr>
                                <tr>
                                    <th>Marital Status:</th>
                                    <td>{details.MaritalStatus}</td>
                                </tr>
                                <tr>
                                    <th>Spouse's Name:</th>
                                    <td>{details.SpouseName}</td>
                                </tr>
                                <tr>
                                    <th>Children:</th>
                                    <td>{details.Children}</td>
                                </tr>
                                <tr>
                                    <th>Position:</th>
                                    <td>{details.Position}</td>
                                </tr>
                                <tr>
                                    <th>Educational Qualification:</th>
                                    <td>{details.EducationalQualification}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="picture">
                            <img id="leaderPhoto" src={require("./images/Shri_Mallikarjun_Khagre.jpg")} alt="Leader/Chairman"/>
                            <b>
                                SHRI MALLIKARJUN KHARGE
                                <br/>
                                LEADER OF THE OPPOSITON, RAJYA SABHA
                            </b>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Profession:</th>
                                <td>{details.Profession}</td>
                            </tr>
                            <tr>
                                <th>Permanent Address:</th>
                                <td>{details.PermanentAddress}</td>
                            </tr>
                            <tr>
                                <th>Present Address:</th>
                                <td>{details.PresentAddress}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{details.Email}</td>
                            </tr>
                            <tr>
                                <th>Positions Held:</th>
                                <td>
                                    {/* <ul>
                                        {details.PositionsHeld.map((position, index) => (
                                        <li key={index}>
                                            {position.Period}: {position.Position}
                                        </li>
                                        ))}
                                    </ul> */}
                                    <table border={1}>
                                        <thead>
                                            <tr>
                                                <th>Period</th>
                                                <th>Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {details.PositionsHeld.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.Period}</td>
                                                    <td>{item.Position}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <th>Freedom Fighter:</th>
                                <td>{details.FreedomFighter}</td>
                            </tr>
                            <tr>
                                <th>Books Published:</th>
                                <td>
                                    <ol>
                                        {details.BooksPublished.map((position, index) => (
                                        <li key={index}>
                                            {position.Title}, {position.Year}, {position.Publisher}.
                                        </li>
                                        ))}
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <th>Social And Cultural Activities:</th>
                                <td>{details.SocialAndCulturalActivities.join('; ')}</td>
                            </tr>
                            <tr>
                                <th>Sports Clubs Pastimes:</th>
                                <td>{details.SportsClubsPastimes.join('; ')}</td>
                            </tr>
                            <tr>
                                <th>Countries Visited:</th>
                                <td>{details.CountriesVisited.join('; ')}</td>
                            </tr>
                            <tr>
                                <th>Other Information:</th>
                                <td>{details.OtherInformation.join('; ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="otherLinks">
                    <div className="border">
                        <h4>FORMER LEADER OF THE OPPOSITON</h4>
                        <div class="formerChairmenList">
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=550&amp;memberName=Shri%20Kamlapati%20Tripathi&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Kamlapati Tripathi</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1592&amp;memberName=Shri%20Bhola%20Paswan%20Shastri&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Bhola Paswan Shastri</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=275&amp;memberName=Shri%20Lal%20K.%20Advani&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Lal K. Advani</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1625&amp;memberName=Shri%20P.%20Shiv%20Shanker&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri P. Shiv Shanker</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=760&amp;memberName=Shri%20M.%20S.%20Gurupadaswamy&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri M. S. Gurupadaswamy</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1305&amp;memberName=Shri%20S.%20%20Jaipal%20Reddy&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri S.  Jaipal Reddy</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=137&amp;memberName=Shri%20Sikander%20Bakht&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Sikander Bakht</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=153&amp;memberName=Shri%20S.B.%20Chavan&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri S.B. Chavan</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=2&amp;memberName=Dr.%20Manmohan%20Singh&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Dr. Manmohan Singh</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=77&amp;memberName=Shri%20Jaswant%20Singh&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Jaswant Singh</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=27&amp;memberName=Shri%20Arun%20Jaitley&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Arun Jaitley</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=126&amp;memberName=Shri%20Ghulam%20Nabi%20Azad&amp;position=FORMER%20LEADER%20OF%20THE%20OPPOSITON">Shri Ghulam Nabi Azad</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderOfOpposition;





