import React, {useEffect} from 'react';
import Logout from '../includes/Logout';

const Gallery= () => {
  useEffect(()=>{
    window.scrollTo(0, 0);    
  })
  return (
    <>
    <Logout/>
      <div id="aboutFirstSection" className="container-fluid relative">
          <div className="overlay"></div>
          <div className="row">
            <div className="col-md-7">
                
            </div>
            <div className="col-md-5">               
                <h2 className="bold">UNDER CONSTRUCTION</h2>
                <hr/><br/>
                <h3>Bear with us</h3>              
            </div>
            
          </div>        
      </div>
     
    </>
  );
}

export default Gallery;
