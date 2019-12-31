import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Logout =props=>{    
    return (        
        <div className="col-md-12">
            {props.redirect ? <Redirect to="/" /> : null}
        </div> 
    );
    
}

Logout.propTypes= {   
    redirect: PropTypes.bool.isRequired  	
}

const mapStateToProps = state => ({	    
    redirect: state.auth.redirect 
})

export default connect(mapStateToProps, {})(Logout);

