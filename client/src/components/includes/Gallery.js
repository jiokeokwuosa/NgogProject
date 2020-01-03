import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { inputChange } from '../../redux/actions/authActions';
import PropTypes from "prop-types";

const Gallery = props => {  
    
    useEffect(()=>{       
        props.inputChange('redirectGallery',false);
        props.inputChange('redirectLogin',false);
        window.scrollTo(0, 0);
    })
    const handleClick1 = e =>{
        e.preventDefault();
        if(props.isAuthenticated){
          props.inputChange('redirectGallery',true);
        }else{
          props.inputChange('redirectLogin',true);
        }
     } 
    return (        
        <div className="col-md-12">
              {props.redirectGallery ?  <Redirect to="/gallery"/> : props.redirectLogin ? <Redirect to="/login" /> : null }
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
                    <Link to='/' onClick={handleClick1}>View</Link>
                </div>
          </div>
        </div> 
    );
    
}
Gallery.propTypes= {	  
    redirectGallery: PropTypes.bool.isRequired,    
    isAuthenticated:PropTypes.bool  	
}
const mapStateToProps = state => ({	
    redirectGallery: state.auth.redirectGallery,   
    isAuthenticated: state.auth.isAuthenticated  
})
export default connect(mapStateToProps, {inputChange})(Gallery);
