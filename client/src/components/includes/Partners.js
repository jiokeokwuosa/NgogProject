import React, { Component } from "react";
import Slider from "react-slick";
import myImage1 from '../../assets/img/Shell icon.jpg';
import myImage2 from '../../assets/img/Oando icon.jpg';
import myImage3 from '../../assets/img/Agip icon.jpg';
import myImage4 from '../../assets/img/Total icon.jpg';
import myImage5 from '../../assets/img/PTI icon.jpg';
import myImage6 from '../../assets/img/NNPC icon.jpg';
import myImage7 from '../../assets/img/NLNG icon.jpg';
import myImage8 from '../../assets/img/NCDMB icon.jpg';
import myImage9 from '../../assets/img/NALPGAM icon.jpg';
import myImage10 from '../../assets/img/Addax icon.jpg';
import myImage11 from '../../assets/img/Chevron icon.jpg';
import myImage12 from '../../assets/img/exxonmobil icon.jpg';
import myImage13 from '../../assets/img/DPR icon.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>        
        <Slider {...settings}>
          <div>
            <img src={myImage1} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage2} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage3} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage4} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage5} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage6} alt="Our Partners"/> 
          </div> 
          <div>
            <img src={myImage7} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage8} alt="Our Partners"/> 
          </div> 
          <div>
            <img src={myImage9} alt="Our Partners"/> 
          </div>    
          <div>
            <img src={myImage10} alt="Our Partners"/> 
          </div> 
          <div>
            <img src={myImage11} alt="Our Partners"/> 
          </div> 
          <div>
            <img src={myImage12} alt="Our Partners"/> 
          </div>  
          <div>
            <img src={myImage13} alt="Our Partners"/> 
          </div>
        </Slider>
      </div>
    );
  }
}