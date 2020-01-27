import React, { useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import CountDown from 'reactjs-countdown';
import PropTypes from "prop-types";
import Slide from '../includes/Slide';
import Sports from '../includes/Sports';
import Nogig from '../includes/Nogig';
import Partners from '../includes/Partners';
import Gallery from '../includes/Gallery';
import { inputChange } from '../../redux/actions/authActions';

const Homepage = props=> {
   useEffect(()=>{
    window.scrollTo(0, 0);
    props.inputChange('redirectLogin',false);
    props.inputChange('redirectRegister',false);
    props.inputChange('redirect',false);
    props.inputChange('redirect1',false);
   })
   const handleClick = e =>{
      e.preventDefault();
      if(props.isAuthenticated){
        props.inputChange('redirectRegister',true);
      }else{
        props.inputChange('redirectLogin',true);
      }
   }
  return (
    <>
     <Slide/>
     {props.redirectLogin ? <Redirect to="/login" /> : props.redirectRegister ?  <Redirect to="/register" /> : null }
     <div id="homepageFirstSection" className="container-fluid relative">
     <div className="bb">
        <Link to='/register' onClick={handleClick}>Register for the Event</Link>
     </div> 
        <div className="row">
          <div className="col-md-12">
            <h4 className="bold">EMPOWERING PARTICIPANTS AND PARTNERS TO DRIVE REAL-WORLD IMPACT THROUGH SPORTS.</h4>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="p1">
              We convene our community through the NOGIG Competition, an industry-facing event in Nigeria.

              We are group of professionals coming together to participate, network in a carbon-free environment to enhance

              physical and mental alertness and create a forum for bonding and friendship in the industry.
              </p>
          </div>
        </div>
        <div className="row myRow">
          <Nogig title={<>THE NOGIG BIRTH</>} content='The games started in 1985 in Eket when NNPC and Mobil, now Exxonmobil hosted the competition in Eket with a few tennis 
                  games. '/>
          <Nogig title={<>THE NOGIG COMMITTMENT</>} content='It is aimed at fostering interaction amonest the Oil and Gas Company employees in Nigeria, also to promotes wellness and fitness programs.'/>
          <Nogig title={<>THE NOGIG LOC</>} content='The NOGIG is a local organising commitee of National Oil and gas industry games formed by representatives of the participating companies.'/> 
              <Link to='/about'>Learn More</Link>
        </div>
     </div>
     <div id="homepageSecondSection" className="container-fluid relative">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-md-6">
              <h5>Keep Professional in Sport</h5>
              <h2 className="bold">THE NOGIG SPORTS</h2>
              <hr/><br/>
              <h5 className="push bold">USING SPORT FOR GOOD</h5>
              <p className="p1">NOGIG Sports harnesses the power of sports to reduce stress, promote health, and inspire careers development for professional in every memeber organization.  Our sports initiatives empower professionals to become a powerful agent of positive social change.<br/>
              <br/> The NOGIG competition prepares members to promote physical activity, healthy living, and good decision making, while cultivating caring, trust-based relationships with others professional through collaboraton they and also to increase their capacity to serve their various organization through quality based approach.</p>
          </div>
          <div className="col-md-6">

          </div>
        </div>
     </div>
     <div id="homepageThirdSection" className="container-fluid">
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
          <Link to='/sports'>See More</Link>
        </div>
     </div>
     <div id="homepageFourthSection" className="container-fluid relative">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-md-12">            
              <h5>Be Part Of Our Community</h5>          
              <h1 className="bold">JOIN OUR NEXT COMPETITION</h1>
              <hr/><br/> 
              <CountDown deadline="February 24, 2020"/>              
              <Link to='/register' onClick={handleClick}>Register for the Games</Link>           
          </div>
        </div>        
     </div>
     <div id="homepageFifthSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="bold">PARTNERS</h2>
            <hr/><br/>  
            <div className="partners">
              <Partners/>  
            </div> 
                
          </div>
        </div>        
     </div>
     <div id="homepageSixthSection" className="container-fluid relative">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
              <h2 className="bold">LATEST NEWS</h2>
              <hr/><br/>
              <h5 className="push bold">ExxonMobil target bright start to football title defence against NLNG</h5>
              <p>January 27, 2020<br></br>
              Preliminaries of the football event of the 2020 Nigeria Oil and Gas Industry Games (NOGIG) beginning Monday at the Legacy Pitch, National Stadium, Surulere, Lagos will see the defending champions, ExxonMobil taking on NLNG in the opening match. In the final of NOGIG 2018, ExxonMobil defeated hard-fighting Chevron 1-0 in a pulsating match that saw to the best of football in exhibition.</p>
                <Link to='/more-news'>Read More</Link>
          </div>          
        </div>
     </div>
     <div id="homepageSeventhSection" className="container-fluid">
        <div className="row row1">
          <Gallery/>          
        </div>
     </div>
     <div id="homepageEightSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <h2 className="bold">FOLLOW US</h2>
              <hr/><br/>
              <div className="row">               
                <div className="col-md-2"><a href='https://www.facebook.com/offocialnogig/ ' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/facebook icons.png')} alt="social media"/></a> </div>
                <div className="col-md-2"><a href='https://www.facebook.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/linkedln icon.png')} alt="social media"/> </a> </div>
                <div className="col-md-2"><a href='https://www.pinterest.com/officialnogig/ ' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/pintrest icons.png')} alt="social media"/> </a> </div>
                <div className="col-md-2"><a href='https://twitter.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/twitter icons.png')} alt="social media"/> </a> </div>
                <div className="col-md-2"><a href='https://www.youtube.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/youtube icons.png')} alt="social media"/></a> </div>
                <div className="col-md-2"><a href='https://www.instagram.com/officialnogig/' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/instagram icons.png')} alt="social media"/></a> </div>  
              </div>
          </div>        
        </div>
     </div>     
    </>
  );
}
Homepage.propTypes= {	  
  redirectRegister: PropTypes.bool.isRequired,
  redirectLogin: PropTypes.bool.isRequired,
  isAuthenticated:PropTypes.bool  	
}
const mapStateToProps = state => ({	
  redirectLogin: state.auth.redirectLogin,
  redirectRegister: state.auth.redirectRegister,
  isAuthenticated: state.auth.isAuthenticated  
})
export default connect(mapStateToProps, {inputChange})(Homepage);
