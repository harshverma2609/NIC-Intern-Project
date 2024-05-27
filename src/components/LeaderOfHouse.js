import React from "react";
import { useNavigate } from "react-router-dom";
import './commonLayout.css'
import details from './LeaderOfHouse.json'

const LeaderOfTheHouse=()=>{
    const navigate=useNavigate();

    return (
        <div>
            <div className="goBack">
                <img className="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div>
                <h1 id="LeaderHeading">SHRI PIYUSH GOYAL</h1>
                <h3 id="position">LEADER OF THE HOUSE, RAJYA SABHA</h3>
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
                            <img id="leaderPhoto" src={require("./images/Shri_Piyush_Goyal.jpg")} alt="Leader/Chairman"/>
                            <b>
                                SHRI PIYUSH GOYAL
                                <br/>
                                LEADER OF THE HOUSE, RAJYA SABHA
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
                        <h4>FORMER LEADER OF THE HOUSE</h4>
                        <div class="formerChairmenList">
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=620&amp;memberName=Shri%20Narasimha%20Gopalaswami%20Ayyangar&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Narasimha Gopalaswami Ayyangar</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1336&amp;memberName=Shri%20Charu%20Chandra%20Biswas&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Charu Chandra Biswas</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1594&amp;memberName=Shri%20Lal%20Bahadur%20Shastri&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Lal Bahadur Shastri</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=788&amp;memberName=Pandit%20Govind%20Ballabh%20Pant&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Pandit Govind Ballabh Pant</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=450&amp;memberName=Hafiz%20Mohammad%20Ibrahim&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Hafiz Mohammad Ibrahim</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=452&amp;memberName=Shri%20Y.%20B.%20Chavan&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Y. B. Chavan</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=983&amp;memberName=Shri%20Jai%20Sukh%20Lal%20Hathi&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Jai Sukh Lal Hathi</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=532&amp;memberName=Shri%20M.%20C.%20Chagla&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri M. C. Chagla</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1550&amp;memberName=Shri%20Kodardas%20Kakudas%20Shah&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Kodardas Kakudas Shah</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=810&amp;memberName=Shri%20Umashankar%20Dikshit&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Umashankar Dikshit</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=550&amp;memberName=Shri%20Kamlapati%20Tripathi&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Kamlapati Tripathi</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=275&amp;memberName=Shri%20Lal%20K.%20Advani&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Lal K. Advani</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=791&amp;memberName=Shri%20K.C.%20Pant&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri K.C. Pant</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=185&amp;memberName=Shri%20Pranab%20Mukherjee&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Pranab Mukherjee</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1765&amp;memberName=Shri%20Vishwanath%20Pratap%20Singh&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Vishwanath Pratap Singh</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=582&amp;memberName=Shri%20Narayan%20Datt%20Tiwari&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Narayan Datt Tiwari</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1625&amp;memberName=Shri%20P.%20Shiv%20Shanker&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri P. Shiv Shanker</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=760&amp;memberName=Shri%20M.%20S.%20Gurupadaswamy&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri M. S. Gurupadaswamy</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=1781&amp;memberName=Shri%20Yashwant%20Sinha&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Yashwant Sinha</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=153&amp;memberName=Shri%20S.B.%20Chavan&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri S.B. Chavan</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=137&amp;memberName=Shri%20Sikander%20Bakht&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Sikander Bakht</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=742&amp;memberName=Shri%20Inder%20Kumar%20Gujral&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Inder Kumar Gujral</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=870&amp;memberName=Shri%20H.D.%20Devegowda&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri H.D. Devegowda</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=77&amp;memberName=Shri%20Jaswant%20Singh&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Jaswant Singh</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=2&amp;memberName=Dr.%20Manmohan%20Singh&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Dr. Manmohan Singh</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=27&amp;memberName=Shri%20Arun%20Jaitley&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Arun Jaitley</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=2214&amp;memberName=Shri%20Thaawarchand%20Gehlot&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Thaawarchand Gehlot</a>
                            <br/>
                            <a href="/member_profile/Home/otherFormerProfile?MP_CODE=2173&amp;memberName=Shri%20Piyush%20Goyal&amp;position=FORMER%20LEADER%20OF%20THE%20HOUSE">Shri Piyush Goyal</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderOfTheHouse;





