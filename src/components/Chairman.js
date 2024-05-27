import React from "react";
import { useNavigate } from "react-router-dom";
import './Chairman.css'
import details from './ChairmanDetails.json'

const Chairman=()=>{
    const navigate=useNavigate();

    return (
        <div>
            <div className="goBack">
                <img className="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div>
                <h1 id="LeaderHeading">SHRI JAGDEEP DHANKHAR</h1>
                <h3 id="position">CHAIRMAN OF RAJYA SABHA</h3>
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
                            <img id="leaderPhoto" src={require("./images/Shri_Jagdeep_Dhankar.jpg")} alt="Leader/Chairman"/>
                            <b>
                                SHRI JAGDEEP DHANKHAR
                                <br/>
                                CHAIRMAN, RAJYA SABHA
                            </b>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>School Education:</th>
                                <td>{details.SchoolEducation}</td>
                            </tr>
                            <tr>
                                <th>College Education:</th>
                                <td>{details.CollegeEducation}</td>
                            </tr>
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
                                <th>Telephone:</th>
                                <td>{details.Telephone.join(', ')}</td>
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
                                <th>Publications:</th>
                                <td>{details.Publications}</td>
                            </tr>
                            <tr>
                                <th>Hobbies:</th>
                                <td>{details.Hobbies.join(', ')}</td>
                            </tr>
                            <tr>
                                <th>Countries Visited:</th>
                                <td>{details.CountriesVisited.join(', ')}</td>
                            </tr>
                            <tr>
                                <th>Associations and Other Interests:</th>
                                <td>
                                <ul>
                                    {details.AssociationsAndOtherInterests.map((association, index) => (
                                    <li key={index}>{association}</li>
                                    ))}
                                </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Other Information:</th>
                                <td>
                                    <ul>
                                        <li>Profession: {details.OtherInformation.Profession}</li>
                                        <li>
                                        The Vice President as Chancellor / Visitor of Universities:
                                        <ul>
                                            {details.OtherInformation.TheVicePresidentAsChancellorOrVisitorOfUniversities.map((info, index) => (
                                            <li key={index}>{info}</li>
                                            ))}
                                        </ul>
                                        </li>
                                        <li>
                                        The Vice President as President / Chairman of the Institutes / Committees:
                                        <ul>
                                            {details.OtherInformation.TheVicePresidentAsPresidentOrChairmanOfTheInstitutesOrCommittees.map((info, index) => (
                                            <li key={index}>{info}</li>
                                            ))}
                                        </ul>
                                        </li>
                                        <li>
                                        The Vice President as Chairman of Juries / Selection Committees for various Awards:
                                        <ul>
                                            {details.OtherInformation.TheVicePresidentAsChairmanOfJuriesOrSelectionCommitteesForVariousAwards.map((info, index) => (
                                            <li key={index}>{info}</li>
                                            ))}
                                        </ul>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="otherLinks">
                    <div className="border">
                        <h4>FORMER CHAIRMEN</h4>
                        <div class="formerChairmenList">
                            <a href="/member_profile/Home/formerChairman?Name=Dr.%20Sarvepalli%20Radhakrishnan&amp;position=FORMER%20CHAIRMAN">Dr. Sarvepalli Radhakrishnan</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Dr.%20Zakir%20Husain&amp;position=FORMER%20CHAIRMAN">Dr. Zakir Husain</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Varahagir%20Venkata%20Giri&amp;position=FORMER%20CHAIRMAN">Shri Varahagir Venkata Giri</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Gopal%20Swarup%20Pathak&amp;position=FORMER%20CHAIRMAN">Shri Gopal Swarup Pathak</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Basappa%20Danappa%20Jatti&amp;position=FORMER%20CHAIRMAN">Shri Basappa Danappa Jatti</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20M%20Hidayatullah&amp;position=FORMER%20CHAIRMAN">Shri M Hidayatullah</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20R.%20Venkataraman&amp;position=FORMER%20CHAIRMAN">Shri R. Venkataraman</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Dr.%20Shanker%20Dayal%20Sharma&amp;position=FORMER%20CHAIRMAN">Dr. Shanker Dayal Sharma</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20K.%20R.%20Narayanan&amp;position=FORMER%20CHAIRMAN">Shri K. R. Narayanan</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Krishan%20Kant&amp;position=FORMER%20CHAIRMAN">Shri Krishan Kant</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Bhairon%20Singh%20Shekhawat&amp;position=FORMER%20CHAIRMAN">Shri Bhairon Singh Shekhawat</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20Mohammad%20Hamid%20Ansari&amp;position=FORMER%20CHAIRMAN">Shri Mohammad Hamid Ansari</a>
                            <br/>
                            <a href="/member_profile/Home/formerChairman?Name=Shri%20M.%20Venkaiah%20Naidu&amp;position=FORMER%20CHAIRMAN">Shri M. Venkaiah Naidu</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chairman;





