import React, {useEffect} from 'react';
import Sports1 from '../includes/Sports1';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { inputChange } from '../../redux/actions/authActions';

const Sports = props =>{     
    useEffect(()=>{
        window.scrollTo(0, 0);
        props.inputChange('redirectLogin',false);
        props.inputChange('redirectRegister',false);        
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
            {props.redirectLogin ? <Redirect to="/login" /> : props.redirectRegister ?  <Redirect to="/register" /> : null }
            <div id="sportsFirstSection" className="container-fluid relative">
                <div className="overlay"></div>
                <div className="row">
                <div className="col-md-6">   
                    <h3>Keep Professionals in Sport</h3>                             
                    <h1 className="bold">THE NOGIG SPORTS</h1> 
                    <hr/><br/><br/><br/>
                    <Link to='/' onClick={handleClick}>Register for NOGIG 2020</Link>
                </div>
                <div className="col-md-6">
                    
                </div>
                </div>        
            </div>
            <div id="sportsSecondSection" className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bold">THE NOGIG FEATURED SPORTS</h2>
                        <hr/><br/>
                    </div>
                </div>
                <div className="row push">
                    <Sports1 image={require('../../assets/img/athletics icons.png')} title='Athletics' />
                    <Sports1 image={require('../../assets/img/badminton.png')} title='Badminton'/>
                    <Sports1 image={require('../../assets/img/basketball icon.png')} title='Basketball'/>
                    <Sports1 image={require('../../assets/img/chess icon2.png')} title='Chess'/>
                </div>
                <div className="row push">
                    <Sports1 image={require('../../assets/img/Golf.png')} title='Golf' />
                    <Sports1 image={require('../../assets/img/lawn tennis.png')} title='Lawn Tennis'/>
                    <Sports1 image={require('../../assets/img/scrabble icon.png')} title='Scrabble'/>
                    <Sports1 image={require('../../assets/img/soccer icon.png')} title='Soccer'/>
                </div>
                <div className="row push">
                    <Sports1 image={require('../../assets/img/squash icons.png')} title='Squash' />
                    <Sports1 image={require('../../assets/img/swimming icons.png')} title='Swimming'/>
                    <Sports1 image={require('../../assets/img/table tennis.png')} title='Table Tennis'/>
                    <Sports1 image={require('../../assets/img/8-ball pool icon.png')} title='8-Ball Pool'/>
                </div>                   
            </div>
       </>
    );
}


Sports.propTypes= {	  
    redirectRegister: PropTypes.bool.isRequired,
    redirectLogin: PropTypes.bool.isRequired,
    isAuthenticated:PropTypes.bool  	
  }
  const mapStateToProps = state => ({	
    redirectLogin: state.auth.redirectLogin,
    redirectRegister: state.auth.redirectRegister,
    isAuthenticated: state.auth.isAuthenticated  
  })
  export default connect(mapStateToProps, {inputChange})(Sports);
