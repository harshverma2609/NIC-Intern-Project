import React from "react";
import { useNavigate } from "react-router-dom";
import './commonLayout.css'
import details from './DeputyChairman.json'

const DeputyChairman=()=>{
    const navigate=useNavigate();

    return (
        <div>
            <div className="goBack">
                <img className="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div>
                <h1 id="LeaderHeading">SHRI HARIVANSH</h1>
                <h3 id="position">DEPUTY CHAIRMAN OF RAJYA SABHA</h3>
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
                            <img id="leaderPhoto" src={require("./images/Shri_Harivansh.jpg")} alt="Leader/Chairman"/>
                            <b>
                                SHRI HARIVANSH
                                <br/>
                                DEPUTY CHAIRMAN, RAJYA SABHA
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
                                <th>Books Edited:</th>
                                <td>
                                    <ol>
                                        {details.EditedBooks.map((position, index) => (
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
                                <td>{details.OtherInformation}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="otherLinks">
                    <div className="border">
                        <h4>FORMER DEPUTY CHAIRMEN</h4>
                        <div class="formerChairmenList">
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=950&amp;memberName=Shri%20S.%20V.%20Krishna%20Moorthy%20Rao&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri S. V. Krishna Moorthy Rao</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=297&amp;memberName=Smt.%20Violet%20Alva&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Smt. Violet Alva</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1166&amp;memberName=Shri%20Bhaurao%20Dewaji%20Khobragade&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri Bhaurao Dewaji Khobragade</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1695&amp;memberName=Shri%20Godey%20Murahari&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri Godey Murahari</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1563&amp;memberName=Shri%20Ram%20Niwas%20Mirdha&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri Ram Niwas Mirdha</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=497&amp;memberName=Shri%20Shyam%20Lal%20Yadav&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri Shyam Lal Yadav</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=23&amp;memberName=Dr.%20Najma%20A.%20Heptulla&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Dr. Najma A. Heptulla</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=428&amp;memberName=Shri%20M.M.%20Jacob&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri M.M. Jacob</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1009&amp;memberName=Smt.%20Pratibha%20Devisingh%20Patil&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Smt. Pratibha Devisingh Patil</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=245&amp;memberName=Shri%20K.%20Rahman%20Khan&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri K. Rahman Khan</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1979&amp;memberName=Prof.%20P.J.%20Kurien&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Prof. P.J. Kurien</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=2269&amp;memberName=Shri%20%20Harivansh&amp;position=FORMER%20DEPUTY%20CHAIRMAN">Shri  Harivansh</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeputyChairman;





