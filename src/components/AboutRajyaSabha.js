import React from "react";
import './AboutRajyaSabha.css'
import { useNavigate } from "react-router-dom";
import OppositionLeaders from './AboutLeadersOfTheOpposition.json';
import LeadersOfHouse from './AboutLeadersOfTheHouse.json';

function About(){
    const navigate=useNavigate();

    return (
        <div  className="content">
            <div className="goBack">
                <img className="homeButton" onClick={()=>{navigate(-1);}} src={require("./images/Home.png")} alt="Home Button"/>
            </div>
            <div className="aboutHeading">
                <h1>RAJYA SABHA (COUNCIL OF STATES)</h1>
            </div>
            <div className="information">
                <h2>BACKGROUND</h2>
                <br/>
                <p>The ‘Council of States’ which is also known as Rajya Sabha, a nomenclature that was announced by the chair in the House on the 23rd August, 1954 has its own distinctive features. The origin of the second Chamber can be traced to the Montague-Chelmsford Report of 1918. The Government of India Act, 1919 provided for the creation of a ‘Council of State’ as a second chamber of the then legislature with a restricted franchise which actually came into existence in 1921. The Governor-General was the ex-officio President of the then Council of State. The Government of India Act, 1935, hardly made any changes in its composition.</p>
                <br/>
                <p>The Constituent Assembly, which first met on 9 December 1946, also acted as the Central Legislature till 1950, when it was converted as ‘Provisional Parliament’.  During this period, the Central Legislature which was known as Constituent Assembly (Legislative) and later Provisional Parliament was unicameral till the first elections were held in 1952.</p>
                <br/>
                <p>Extensive debate took place in the Constituent Assembly regarding the utility or otherwise of a Second Chamber in Independent India and ultimately, it was decided to have a bicameral legislature for independent India mainly because a federal system was considered to be most feasible form of Government for such a vast country with immense diversities.  A single directly elected House, in fact, was considered inadequate to meet the challenges before free India.  A second chamber known as the ‘Council of States’, therefore, was created with altogether different composition and method of election from that of the directly elected House of the People.  It was conceived as another Chamber, with smaller membership than the Lok Sabha (House of the People).  It was meant to be the federal chamber i.e., a House elected by the elected members of Assemblies of the States and two Union Territories in which  States were not given equal representation.  Apart from the elected members, provision was also made for the nomination of twelve members to the House by the President.  The minimum age of thirty years was fixed for membership as against twenty-five years for the Lower House.  The element of dignity and prestige was added to the Council of State House by making the Vice-President of India ex-officio Chairman of the Rajya Sabha who presides over its sittings.</p>
                <br/>
                <h2>CONSTITUTIONAL PROVISIONS RELATING TO RAJYA SABHA</h2>
                <br/>
                <p>Composition/Strength</p>
                <br/>
                <p>Article 80 of the Constitution lays down the maximum strength of Rajya Sabha as 250, out of which 12 members are nominated by the President and 238 are representatives of the States and of the two Union Territories.  The present strength of Rajya Sabha, however, is 245, out of which 233 are representatives of the States and Union territories of Delhi and Puducherry and 12 are nominated by the President. The members nominated by the President are persons having special knowledge or practical experience in respect of such matters as literature, science, art and social service.</p>
                <br/>
                <h2>ALLOCATION OF SEATS</h2>
                <br/>
                <p>The Fourth Schedule to the Constitution provides for allocation of seats to the States and Union Territories in Rajya Sabha.  The allocation of seats is made on the basis of the population of each State.  Consequent on the reorganization of States and formation of new States, the number of elected seats in the Rajya Sabha allotted to States and Union Territories has changed from time to time since 1952. </p>
                <br/>
                <h2>ELIGIBILITY</h2>
                <br/>
                <p>Qualifications</p>
                <br/>
                <p>Article 84 of the Constitution lays down the qualifications for membership of Parliament.  A person to be qualified for the membership of the Rajya Sabha should posses the following qualifications:</p>
                <br/>
                <ol>
                    <li>he must be a citizen of India and make and subscribe before some person authorized in that behalf by the Election Commission an oath or affirmation according to the form set out for the purpose in the Third Schedule to the Constitution;</li>
                    <li>he must be not less than 30 years of age;</li>
                    <li>he must possess such other qualifications as may be prescribed in that behalf by or under any law made by Parliament.</li>
                </ol>
                <br/>
                <p>Disqualifications</p>
                <br/>
                <p>Article 102 of the Constitution lays down that a person shall be disqualified for being chosen as, and for being, a member of either House of Parliament-</p>
                <br/>
                <ol>
                    <li>if he holds any office of profit under the Government of India or the Government of any State, other than an office declared by Parliament by law not to disqualify its holder;</li>
                    <li>if he is of unsound mind and stands so declared by a competent court;</li>
                    <li>if he is an undischarged insolvent;</li>
                    <li>if he is not a citizen of India, or has voluntarily acquired the citizenship of a foreign State, or is under any acknowledgement of allegiance or adherence to a foreign State;</li>
                    <li>if he is so disqualified by or under any law made by Parliament.</li>
                </ol>
                <br/>
                <p>Explanation- For the purpose of this clause a person shall not be deemed to hold an office of profit under the Government of India or the Government of any State by reason only that he is a Minister either for the Union or for such State.</p>
                <br/>
                <p>Besides, the Tenth Schedule to Constitution provides for disqualification of the members on ground of defection.  As per the provisions of the Tenth Schedule, a member may be disqualified as a member, if he voluntarily gives up the membership of his political party; or if he votes or abstains from voting in the House contrary to any direction issued by the political party to which he belongs, unless such voting or abstention has been condoned by the political party within fifteen days.  A member elected as an independent candidate shall be disqualified if he joins any political party after his election.</p>
                <br/>
                <p>A member nominated to the House by the President, however, is allowed to join a political party if he/she does so within the first six months of taking seat in the House.</p>
                <br/>
                <p>A member shall not be disqualified on this account, if he voluntarily leaves the membership of his political party after he is elected Deputy Chairman, Rajya Sabha.</p>
                <br/>
                <h2>PROCESS FOR ELECTION/NOMINATION</h2>
                <br/>
                <p>Electoral College:</p>
                <br/>
                <p>The representatives of the States and of the Union Territories in the Rajya Sabha are elected by the method of indirect election.  The representatives of each State and two Union territories are elected by the elected members of the Legislative Assembly of that State and by the members of the Electoral College for that Union Territory, as the case may be, in accordance with the system of proportional representation by means of the single transferable vote. The Electoral College for the National Capital Territory of Delhi consists of the elected members of the Legislative Assembly of Delhi, and that for Puducherry consists of the elected members of the Puducherry Legislative Assembly.</p>
                <br/>
                <p>Biennial/Bye-election</p>
                <br/>
                <p>Rajya Sabha is a permanent House and is not subject to dissolution.  However, one-third Members of Rajya Sabha retire after every second year.  A member who is elected for a full term serves for a period of six years.  The election held to fill a vacancy arising otherwise than by retirement of a member on the expiration of his term of office is called ‘Bye-election’. A member elected in a bye-election remains member for the remainder of the term of the member who had resigned or died or disqualified to be member of the House under the Tenth Schedule.</p>
                <br/>
                <h2>PRESIDING OFFICERS - CHAIRMAN AND DEPUTY CHAIRMAN</h2>
                <br/>
                <p>The Presiding Officers of Rajya Sabha have the responsibility to conduct the proceedings of the House.  The Vice-President of India is ex-officio Chairman of Rajya Sabha.  Rajya Sabha also chooses from amongst its members, a Deputy Chairman.  There is also a Panel of Vice-Chairmen in Rajya Sabha, the members of which are nominated by the Chairman, Rajya Sabha.  In the absence of the Chairman and Deputy Chairman, a member from the Panel of Vice-Chairmen presides over the proceedings of the House. </p>
                <br/>
                <h2>SECRETARY-GENERAL</h2>
                <br/>
                <p>The Secretary-General is appointed by the Chairman of Rajya Sabha and holds rank equivalent to the highest civil servant of the Union.  The Secretary-General works with anonymity and is readily available to the Presiding Officers for rendering advice on parliamentary matters. The Secretary-General is also the administrative head of the Rajya Sabha Secretariat and the custodian of the records of the House.  He works under the direction and control of the Chairman, Rajya Sabha.</p>
                <br/>
                <h2>RELATION BETWEEN THE TWO HOUSES</h2>
                <br/>
                <p>Under article 75(3) of the Constitution, the Council of Ministers is collectively responsible to Lok Sabha which means Rajya Sabha cannot make or unmake the Government.  It can, however, exercise control over the Government and this function becomes quite prominent, particularly when the Government does not enjoy majority in Rajya Sabha.</p>
                <br/>
                <p>To resolve a deadlock between the two Houses, in case of an ordinary legislation, the Constitution provides for the joint sitting of both Houses.  In fact, there have been three occasions in the past when the Houses of Parliament had met in joint sitting to resolve differences between them.  Issues in joint sitting are decided by a majority of the total number of members of both Houses present and voting. The joint sitting is held in the Central Hall of Parliament House presided over by the Speaker, Lok Sabha. However, in the case of a Money Bill, there is no provision in the Constitution for a joint sitting of both Houses as Lok Sabha clearly enjoys pre-eminence over Rajya Sabha in financial matters. As regards a Constitution amendment Bill, it has been provided in the Constitution that such a Bill has to be passed by the specific majority, as prescribed under article 368 of the Constitution, by both Houses.  There is, therefore, no provision for resolving a deadlock between the two Houses in regard to a Constitution amendment Bill.</p>
                <br/>
                <p>Ministers may belong to either House of Parliament.  The Constitution does not make any distinction between the Houses in this regard. Every Minister has the right to speak and take part in the proceedings of either House but he is entitled to vote only in the House of which he is a member.</p>
                <br/>
                <p>Similarly, with regard to powers, privileges and immunities of the Houses of Parliament, their members and committees thereof, the two Houses are placed absolutely on equal footing by the Constitution.</p>
                <br/>
                <p>Other important matters in respect of which both Houses enjoy equal powers are election and impeachment of the President, election of the Vice-President, approving the Proclamation of Emergency, the proclamation regarding failure of constitutional machinery in States and financial emergency.  In respect of receiving reports and papers from various statutory authorities, etc., both Houses have equal powers.</p>
                <br/>
                <p>It is thus clear that except in the case of collective responsibility of the Council of Ministers and certain financial matters, which fall in the domain of Lok Sabha only, both Houses enjoy equal powers.</p>
                <br/>
                <h2>SPECIAL POWERS OF RAJYA SABHA</h2>
                <br/>
                <p>Rajya Sabha being a federal chamber enjoys certain special powers under the Constitution.  All the subjects/areas regarding legislation have been divided into three Lists - Union List, State List and concurrent List. Union and State Lists are mutually exclusive - one cannot legislate on a matter placed in the sphere of the other.  However, if Rajya Sabha passes a resolution by a majority of not less than two-thirds of members present and voting saying that it is "necessary or expedient in the national interest" that Parliament should make a law on a matter enumerated in the State List, Parliament becomes empowered to make a law on the subject specified in the resolution, for the whole or any part of the territory of India.  Such a resolution remains in force for a maximum period of one year but this period can be extended by one year at a time by passing a similar resolution further.</p>
                <br/>
                <p>If Rajya Sabha passes a resolution by a majority of not less than two-thirds of the members present and voting declaring that it is necessary or expedient in the national interest to create one or more All India Services common to the Union and the States, Parliament becomes empowered to create by law such services.</p>
                <br/>
                <p>Under the Constitution, the President is empowered to issue Proclamations in the event of national emergency, in the event of failure of constitutional machinery in a State, or in the case of financial emergency.  Every such proclamation has to be approved by both Houses of Parliament within a stipulated period.  Under certain circumstances, however, Rajya Sabha enjoys special powers in this regard.  If a Proclamation is issued at a time when Lok Sabha has been dissolved or the dissolution of Lok Sabha takes place within the period allowed for its approval, then the proclamation remains effective, if the resolution approving it is passed by Rajya Sabha within the period specified in the Constitution under articles 352, 356 and 360.</p>            
                <br/>
                <h2>RAJYA SABHA IN FINANCIAL MATTERS</h2>            
                <br/>
                <p>A Money Bill can be introduced only in Lok Sabha.  After it is passed by that House, it is transmitted to Rajya Sabha for its concurrence or recommendation.  The power of Rajya Sabha in respect of such a Bill is limited.   Rajya Sabha has to return such a Bill to Lok Sabha within a period of fourteen days from its receipt.  If it is not returned to Lok Sabha within that time, the Bill is deemed to have been passed by both Houses at the expiration of the said period in the form in which it was passed by Lok Sabha.  Again, Rajya Sabha cannot amend a Money Bill; it can only recommend amendments and Lok Sabha may either accept or reject all or any of the recommendations made by Rajya Sabha.</p>
                <br/>
                <p>Apart from a Money Bill, certain other categories of Financial Bills also cannot be introduced in Rajya Sabha.  There are, however, some other types of Financial Bills on which there is no limitation on the powers of the Rajya Sabha.  These Bills may be initiated in either House and Rajya Sabha has powers to reject or amend such Financial Bills like any other Bill.  Of course, such Bills cannot be passed by either House of Parliament unless the President has recommended to that House the consideration thereof.</p>            
                <br/>
                <p>From all this, however, it does not follow that Rajya Sabha has nothing to do in matters relating to finance.  The Budget of the Government of India is laid every year before Rajya Sabha also and its members discuss it.  Though Rajya Sabha does not vote on Demands for Grants of various Ministries - a matter exclusively reserved for Lok Sabha - no money, however, can be withdrawn from the Consolidated Fund of India unless the Appropriation Bill has been passed by both the Houses.  Similarly, the Finance Bill is also brought before Rajya Sabha.  Besides, the Department-related Parliamentary Standing Committees that examine the annual Demands for Grants of the Ministries/Departments are joint committees having ten members from Rajya Sabha. </p>
                <br/>
                <h2>LEADER OF THE HOUSE</h2>
                <br/>
                <p>Apart from the Chairman and the Deputy Chairman, Leader of the House is another functionary who plays important role in the efficient and smooth conduct of the business in the House.  The Leader of the House in Rajya Sabha is normally the Prime Minister, if he is its member or any Minister who is a member of the House and is nominated by him to so function.  His primary responsibility is to maintain coordination amongst all sections of the House for a harmonious and meaningful debate in the House.  For this purpose, he remains in close contact not only with the Government but also with the Opposition, individual ministers and the Presiding Officer.  He occupies the first seat in the Chamber in first row at right the side of the Chair so that he is easily available to the Presiding Officer for consultation. Under the rules, the Leader of the House is consulted by the Chairman in regard to the arrangement of Government business in the House, allotment of days or allocation of time for discussion on the President’s Address, Private Members’ business on any day other than Friday, discussion on No Day-Yet-Named Motions, Short Duration Discussions and consideration and return of a Money Bill.  He is also consulted by the Chairman in the matter of adjournment or otherwise of the House for the day in case of death of an outstanding personality, national leader or international dignitary. In the era of coalition governments, his task has become more challenging.  He ensures that all possible and reasonable facilities are made available to the House for a meaningful discussion on any matter that is brought before it.  He works as the spokesperson of the House in expressing sense of the House and represents it on ceremonial or formal occasions. The following members have been the Leaders of the House in the Rajya Sabha:</p>
                <br/>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LeadersOfHouse.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.From}</td>
                                <td>{item.To}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <br/>
                <h2>LEADER OF THE OPPOSITION (LOP)</h2>
                <br/>
                <p>The office of the Leader of the Opposition in a legislature is of great public importance.  Its importance emanates from the central role accorded to the Opposition in a parliamentary democracy. The role of the Leader of the Opposition, in fact, is more difficult as he has to criticize, find fault and present alternative proposals/policies with no power to implement them.  He has, thus, to perform a special responsibility to Parliament and to the nation.</p>
                <br/>
                <p>In  Rajya Sabha until 1969, there was no Leader of the Opposition in real sense of the term. Till then, the practice was to call the Leader of the party in Opposition having the largest number of the members as the Leader of the Opposition, without according him any formal recognition, status or privilege.  The office of Leader of the Opposition was given official recognition through the Salary and Allowances of Leaders of the Opposition in Parliament Act, 1977.  This Act defines the Leader of the Opposition in Rajya Sabha, as a member of the Council of States who is, for the time being, the Leader in that House of the party in opposition to the Government constituting the greatest numerical strength and recognized as such by the Chairman of the Council of States.  Thus, the Leader of the Opposition should satisfy three conditions, namely, (i) he should be a member of the House (ii) the Leader in Rajya Sabha of the party in opposition to the Government having the greatest numerical strength and (iii) be recognized as such by the Chairman, Rajya Sabha.    The following members have been the Leaders of the Opposition in the Rajya Sabha:</p>
                <br/>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OppositionLeaders.map(item => (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.From}</td>
                            <td>{item.To}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <br/>
                <p>Rajya Sabha has played a constructive and effective role in our polity.  Its performance in the legislative field and in influencing the Government policies has been quite significant.  Rajya Sabha has, in fact, worked in a spirit of cooperation with Lok Sabha as per the Constitutional mandate.  Rajya Sabha has prevented hasty legislation and has served as dignified chamber representing the federal principle.  As a federal chamber, it has worked for the unity and integrity of the nation and has reinforced the faith of the people in parliamentary democracy.</p>
                <br/>
            </div>
        </div>
    );
}

export default About;

