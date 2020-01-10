import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import { inputChange, registerUser, showMessage,clearMessage } from '../../redux/actions/authActions';
import PropTypes from "prop-types";

class Signup extends Component {
    constructor(props){
        super(props);         
        this.handleChange=this.handleChange.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this); 
        this.handlePasscode=this.handlePasscode.bind(this);  
        this.validator = new SimpleReactValidator();       
    }
    componentDidMount(){
        this.props.clearMessage();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;        
        if(error !== prevProps.error){
            if(error.id ==='REGISTER_FAILURE' || error.id ==='REGISTER_SUCCESS'){
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

    handlePasscode(e){  
        e.preventDefault();    
        if(this.props.passcode === '50104152'){
            this.props.inputChange('form1', 'off');
            this.props.inputChange('form2', 'on');
        }else{
            alert('Invalid Passcode');
        }
		
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.validator.allValid()) {
            const {firstName, lastName, email, password, confirmPassword} = this.props;
            const user = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            }
            this.props.registerUser(user);
        } else {
            this.validator.showMessages();           
            this.forceUpdate();
        }
    }

    render(){                
        return (            
            <>            
                <div id="signupFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                    <div className="col-md-6">   
                        <h3>Register with us?</h3>                             
                        <h2 className="bold">GET CONNECTED!</h2> 
                        <hr/><br/>                         
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                    </div>        
                </div>
                <div id="loginSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 partOne">
                            <p>Thank you for your interest in joining the NOGIG community.<br/><br/> You will have access to our the online community, including forums, our newsletters, resources, the event calendar, and more.  You will also receive email communications from NOGIG.<br/><br/><h5 className="bold">HOW TO JOIN</h5>
                            The step to joining the community is to Sign Up. <br/><br/>You will know that you have been officially approved as a member when you receive an acceptance notification via email - this email will also include a member welcome packet and additional information.<br/><br/>
                            If you have any questions, please contact us at <a href="mailto:membership@officialnogig.com">membership@officialnogig.com</a></p> 
                        </div>
                        <div className="col-md-6 partTwo">
                            <h3 className="bold">BECOME A MEMBER</h3>
                            <span id="form1" className={this.props.form1}>
                               <form onSubmit={this.handlePasscode}>
                                    <h5>Please enter passcode</h5>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="text" name="passcode" placeholder="Enter Passcode" value={this.props.passcode} onChange={this.handleChange} required/>                      
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="submit" value="Continue"/>
                                        </div>
                                    </div>
                              </form> 
                            </span>
                            <span id="form2" className={this.props.form2}>                                
                                <h5>Please enter your details</h5>
                                {this.props.signUpMessage ? <Alert color={this.props.signUpMessageClass}>{ this.props.error.msg.isArray ? this.props.error.msg.map(item => {return <>{item} <br/></> }): this.props.error.msg }</Alert> : null}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="text" name="firstName" placeholder="Enter First Name" value={this.props.firstName} onChange={this.handleChange}/>
                                            {this.validator.message('First name', this.props.firstName, 'required|alpha')}
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="text" name="lastName" placeholder="Enter Last Name" value={this.props.lastName} onChange={this.handleChange}/>
                                            {this.validator.message('Last name', this.props.lastName, 'required|alpha')}
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="email" name="email" placeholder="Enter Email" value={this.props.email} onChange={this.handleChange}/>
                                            {this.validator.message('Email', this.props.email, 'required|email')}
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="password" name="password" placeholder="Enter Password" value={this.props.password} onChange={this.handleChange}/>
                                            {this.validator.message('Password', this.props.password, 'required|min:6')}
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.props.confirmPassword} onChange={this.handleChange}/>
                                            {this.validator.message('Confirm Password', this.props.confirmPassword, 'required')}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 left">
                                            <input type="checkbox" name="checkRobot" value={this.props.checkRobot} onChange={this.handleChange}/> i'm not a robot
                                            {this.validator.message('Check box', this.props.checkRobot, 'accepted')}
                                        </div>
                                    </div>
                                    <div className="row push">
                                        <div className="col-md-12">
                                            <input type="submit" value="Sign Up"/>
                                        </div>
                                    </div>
                                </form>
                            </span>
                            <div className="row push">
                                <div className="col-md-12">
                                   <p className="left">Already have an account? <Link to="/login">Login</Link></p>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </>
        );
    }
  
}
Signup.propTypes= {	
    inputChange:PropTypes.func.isRequired,
    registerUser:PropTypes.func.isRequired,
	firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    checkRobot: PropTypes.bool.isRequired,	
}
const mapStateToProps = state => ({
	firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
    password: state.auth.password,
    confirmPassword: state.auth.confirmPassword,
    checkRobot: state.auth.checkRobot,
    signUpMessage:state.auth.signUpMessage,
    passcode: state.auth.passcode,
    form1: state.auth.form1,
    form2: state.auth.form2,
    error:  state.error,
    signUpMessageClass:state.auth.signUpMessageClass
})
export default connect(mapStateToProps, {inputChange, registerUser, showMessage, clearMessage})(Signup);
