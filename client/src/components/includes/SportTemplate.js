import React from 'react';
import {Link} from 'react-router-dom';
import Sports from './Sports';
import Logout from './Logout';


const Template= (props) => {
  return (
    <>
    <Logout/>
      <div id={props.id} className="container-fluid relative">
          <div className="overlay"></div>
          <div className="row">
            
          </div>        
      </div>
      <div id="athleticsSecondSection" className="container-fluid">
          <div className="row row1">
            <div className="col-md-12">
                <h2 className="bold">{props.title}</h2>
                <p>{props.firstContent}</p>
                <h3 className="bold">Facts</h3>
                <p>{props.secondContent}</p>
            </div>            
          </div>   
          <div className="row row2">             
            <div className="col-md-12">
                <h3 className="bold center">NOGIG MEDAL RESULTS 2020</h3>
                <div className="row push">
                    <div className="col-md-6">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th colSpan="3">{props.title}-Men</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Gold</td>
                                    <td> ?</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Silver</td>
                                    <td> ?</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bronze</td>
                                    <td> ?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th colSpan="3">{props.title}-Female</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Gold</td>
                                    <td> ?</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Silver</td>
                                    <td> ?</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bronze</td>
                                    <td> ?</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

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
        <Link to='/sports'>View More</Link>
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

export default Template;
