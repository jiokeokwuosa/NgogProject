import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import { inputChange, loginUser, clearMessage, showMessage } from '../../redux/actions/authActions';
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props){
        super(props);         
        this.handleChange=this.handleChange.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this);  
        this.validator = new SimpleReactValidator();       
    }

    componentDidMount(){
        this.props.clearMessage();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;        
        if(error !== prevProps.error){
            if(error.id ==='LOGIN_FAILURE'){
                this.props.showMessage()
            }
        }
    }

    handleChange(e){
        const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.props.inputChange(name, value);	
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.validator.allValid()) {
            const {email, password} = this.props;
            const user = {
                email,
                password               
            }
            this.props.loginUser(user);
          } else {
            this.validator.showMessages();           
            this.forceUpdate();
          }
    }

    render(){           
        return (
            <>
            {this.props.redirect1 ? <Redirect to="/homepage" /> : null}
                <div id="loginFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6">   
                            <h3>Already a Member?</h3>                             
                            <h2 className="bold">LOGIN</h2> 
                            <hr/><br/>                         
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="loginSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 partOne">
                            <p>Welcome to NOGIG. In order to access our membership platform, an account is required. It's easy! If you are a member, simply sign in with your username and password below.<br/><br/>
                                If you are not a member, you can gain access to NOGIG by joining us!<br/><br/>
                                The process is simple, and we encourage you to apply to join us.  Click on the "Click here to Sign Up" link below and fill out the application that follows.  We'll get back to you in order to welcome you to our community!
                                <br/><br/>If you have an issues regards the process, please send us an email at: <a href="mailto:membership@officialnogig.com">membership@officialnogig.com</a>
                            </p>
                        </div>
                        <div className="col-md-6 partTwo">
                            {this.props.loginMessage ? <Alert color='danger'>{ this.props.error.msg.isArray ? this.props.error.msg.map(item => {return <>{item} <br/></> }): this.props.error.msg }</Alert> : null}
                            <form onSubmit={this.handleSubmit}>
                                <h3 className="bold">LOGIN</h3>
                                <h5>Please enter your email and password</h5>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="email" name="email" placeholder="Enter Email" value={this.props.email} onChange={this.handleChange}/>
                                        {this.validator.message('Email', this.props.email, 'required|email')}
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="password" name="password" placeholder="Enter Password" value={this.props.password} onChange={this.handleChange}/>
                                        {this.validator.message('Password', this.props.password, 'required')}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 left">
                                        <input type="checkbox" name="checkRobot1" value={this.props.checkRobot1} onChange={this.handleChange} checked/> Remember Me?
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="submit" value="Login"/>
                                    </div>
                                </div>
                            </form>
                            <div className="row push">
                                <div className="col-md-12">
                                   <p className="left">Forgot your password? <Link to="/forgotPassword">Click here</Link></p>
                                   <p className="left push2">Don't have an account yet? <Link to="/signup">Click here to Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </>
        );
    }
  
}
Login.propTypes= {	
    inputChange:PropTypes.func.isRequired,
    loginUser:PropTypes.func.isRequired,
    clearMessage:PropTypes.func.isRequired,	
    showMessage:PropTypes.func.isRequired,	
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    checkRobot1: PropTypes.bool.isRequired,
    redirect1: PropTypes.bool.isRequired  	
}

const mapStateToProps = state => ({	
    email: state.auth.email,
    password: state.auth.password,   
    checkRobot1: state.auth.checkRobot1,
    error:  state.error,
    loginMessage: state.auth.loginMessage, 
    redirect1: state.auth.redirect1 
})
export default connect(mapStateToProps, {inputChange, loginUser, clearMessage, showMessage})(Login);
