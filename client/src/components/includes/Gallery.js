import React from 'react';
import {Link} from 'react-router-dom';

const Gallery =()=>{    
    return (        
        <div className="col-md-12">
            <h2 className="bold">GALLERY</h2>
            <hr/><br/>
            <div className="row push">
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery8.jpg')} alt="gallery"/>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery2.jpg')} alt="gallery"/>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery3.jpg')} alt="gallery"/>
                </div>               
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery10.jpg')} alt="gallery"/>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery11.jpg')} alt="gallery"/>
                </div>
                <div className="col-md-4">
                    <img src={require('../../assets/img/gallery5.jpg')} alt="gallery"/>
                </div>               
            </div>
            <div className="row">
                <div className="col-md-6">
                <h4>VIEW ALL OUR GALLERY HERE</h4>
                </div>
                <div className="col-md-6 push3">
                    <Link to='/'>View</Link>
                </div>
          </div>
        </div> 
    );
    
}

export default Gallery;
