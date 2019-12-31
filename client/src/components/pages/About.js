import React from 'react';
import Sports from '../includes/Sports';
import {Link} from 'react-router-dom';
import Logout from '../includes/Logout';

const About= () => {
  return (
    <>
    <Logout/>
      <div id="aboutFirstSection" className="container-fluid relative">
          <div className="overlay"></div>
          <div className="row">
            <div className="col-md-7">
                
            </div>
            <div className="col-md-5">               
                <h2 className="bold">OUR GOALS DON'T <br/>END ON THE FIELD</h2>
                <hr/><br/>
                <h3>Creating change through sports</h3>
                <button>Become a member?</button>
            </div>
            
          </div>        
      </div>
      <div id="aboutSecondSection" className="container-fluid">
          <div className="row row1">
            <div className="col-md-12">
                <h2 className="bold">THE NOGIG</h2>
                <hr/>
                <p className="partOne">The games started in 1985 in Eket when NNPC and Mobile, now Exxomobile hosted the competition in Eket with a few Tennis Games. Nigeria Oil and Gas Industries Games (NOGIG) is a bilateral event which takes place every two years in Lagos, Nigeria. The games features various oil and gas industry employees in Nigeria participating in various sports.</p>
                <p className="partTwo">Since 1985, The NOGIG provides a unique settings for participants from various companies to join the celebration of unity, collaboration and  friendship across all boundaries. The NOGIG games are the main events for all this participants.</p>
                <p className="partThree">The NOGIG are staged over a period of seven (7) days. They start with the opening ceremony and end with the closing ceremony. NOGIG forms a local organizing committe to organize and plan the games. The conduct of competitions as well as ceremonies is subject to the rules of NOGIG, the directives of the organization and the staging of the event.</p>
                <p className="partFour">NOGIG games is usually held in three different locations and divided into two(2) stages:- Preliminary events for soccer qualification. Actual events for other games and finals of soccer competition</p>
                <p className="partFive"><b>Details of Event</b><br/>Start with an opening ceremony with invitation of different company official and LCM, ends with a closing ceremony including a match past and presentation of trophies and awards in the presence of the captains of the oil and gas industry.</p>
            </div>            
          </div>   
          <div className="row row2">
            <div className="col-md-5">
                <div className="commitment">
                    <h3 className="bold">NOGIG COMMITMENT</h3>
                    <hr/>
                    <p>To fostering interaction amongest the Oil and Gas Company employees in Nigeria.<br/><br/> Promotes wellness and fitness programs for employees.</p>
                </div>
            </div>
            <div className="col-md-7">
                <div className="loc">
                    <h3 className="bold">THE NOGIG LOC</h3>
                    <hr/>
                    <p>The NOGIG is a local organising commitee of National Oil and gas industry games formed by representatives of the participating companies.<br/><br/> Furthermore, the NOGIG will provide techinical assitance and also help to promote activites.<br/><br/>The NOGIG LOC will also support and assist participating company delegations taking part in games.</p>
                </div>
            </div>
          </div>     
      </div>
      <div id="aboutThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <h2 className="bold">THE NOGIG FEATURED SPORTS</h2>
              <hr/><br/>
          </div>
        </div>
        <div className="row push">
          <Sports image={require('../../assets/img/athletics icons.png')} title='Athletics' description='Our athletics game is very competitive and requiring physical skill. It is arrange into 100m and 4x100m relay.'/>
          <Sports image={require('../../assets/img/basketball icon.png')} title='Basketball' description='Our basketball game is played between two teams of five players each on a rectangular court, usually indoors.'/>
          <Sports image={require('../../assets/img/badminton.png')} title='Badminton' description='Our badminton game is a racquet sport played using racquets to hit a shuttlecock across a net. Try and check it out'/>
          <Sports image={require('../../assets/img/Golf.png')} title='Golf' description='Our golf game reuired participate to use various clubs to hit balls into a series of holes on a course in as few strokes as possible.'/>
          <Link to='/sports'>Learn More</Link>
        </div>
     </div>
     <div id="homepageEightSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <h2 className="bold">FOLLOW US</h2>
              <hr/><br/>
              <div className="row">               
                <div className="col-md-2"><img src={require('../../assets/img/facebook icons.png')} alt="social media"/> </div>
                <div className="col-md-2"><img src={require('../../assets/img/linkedln icon.png')} alt="social media"/> </div>
                <div className="col-md-2"><img src={require('../../assets/img/pintrest icons.png')} alt="social media"/>  </div>
                <div className="col-md-2"><img src={require('../../assets/img/twitter icons.png')} alt="social media"/> </div>
                <div className="col-md-2"><img src={require('../../assets/img/youtube icons.png')} alt="social media"/> </div>
                <div className="col-md-2"><img src={require('../../assets/img/instagram icons.png')} alt="social media"/> </div>  
              </div>
          </div>        
        </div>
     </div>
    </>
  );
}

export default About;
