import React from 'react';

const Footer = () => {
  return (     
    <footer className="container-fluid">
        
        <div className="row">
        <div className="col-md-12">
            <h2 className="bold">CONTACT US</h2>
            <hr className="one"/><br/>
            <div className="row push">
                <div className="col-md-4">
                    <img src={require('../../assets/img/home icons.png')} alt="location"/>
                    <h6>Alfred Road,<br/>Lagos State, Nigeria</h6>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/phone icons.png')} alt="phone"/>
                    <h6>+234 700 000 0000</h6>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/message icons.png')} alt="mail"/>
                    <h6>info@nogig.com</h6>
                </div>
            </div>  
            <hr/> 
            <p> &copy; Nigeria Oil and Gas Industry Games 2019 | Privacy Policy | Powered by Tybene Consulting</p>           
        </div>
        </div>          
    </footer>
   
  );
}

export default Footer;
