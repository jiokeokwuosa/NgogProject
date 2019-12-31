import React, {Component} from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { Alert } from 'reactstrap';
import { inputChange, checkboxChange, registerGames } from '../../redux/actions/registrationActions';
import { clearMessage, showMessage } from '../../redux/actions/authActions';
import PropTypes from "prop-types";
import Logout from '../includes/Logout';

class Register extends Component {
    constructor(props){
        super(props);         
        this.handleChange=this.handleChange.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this);  
        this.handleCheckbox=this.handleCheckbox.bind(this);
        this.validator = new SimpleReactValidator();     
    }
    
    componentDidMount(){
        this.props.clearMessage();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;               
        if(error !== prevProps.error){            
            if(error.id ==='GAMES_REGISTRATION_SUCCESS' || error.id ==='GAMES_REGISTRATION_FAILURE'){
                this.props.showMessage()
            }
        }
    }

    handleChange(e){
        const target = e.target;
        const name = target.type === 'file' ? target.id : target.name;
        const value = target.type === 'checkbox' ? target.checked : target.type === 'file' ? URL.createObjectURL(e.target.files[0]) : target.value;
        this.props.inputChange(name, value);	

        if(target.type === 'file'){
            let myValue ={};
            const name =  target.name;
            myValue = e.target.files[0];
            console.log(myValue);
            this.props.inputChange(name, myValue);           
        }
    }
    
    handleCheckbox(e){
        const { name } = e.target;
        this.props.checkboxChange(name);
    }
        
    handleSubmit(e){       
        e.preventDefault();
        if (this.validator.allValid()) {
            const { games, sports } = this.props;
            let checkedItems = sports.filter(item => games[item.name]);
            checkedItems =checkedItems.map(item=>{
                return item.name;
            });
             if(! checkedItems.length){
                 alert('Select some sports to proceed');
                 return;
             }else{                 
                const {position, department,dateOfEmployment, employmentNo, phone, token, imageUrl1, imageUrl2} = this.props;                
                const data = new FormData() 
                data.append('imageUrl', imageUrl1);
                data.append('imageUrl', imageUrl2);
                data.append('position', position);
                data.append('department', department);
                data.append('dateOfEmployment', dateOfEmployment);
                data.append('employmentNo', employmentNo);
                data.append('phone', phone);
                data.append('games', checkedItems);
                data.append('token', token)                
                console.log(data);
                this.props.registerGames(data);              
                 
             }
            
        } else {
        this.validator.showMessages();           
        this.forceUpdate();
        }
    }

    render(){           
        return (
            <>
                <Logout/>
                <div id="registerFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6">   
                            <h3>Want to be part of the event?</h3>                             
                            <h2 className="bold">PARTICIPANT'S ENTRY FORM 2020</h2> 
                            <hr/><br/>                         
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="registerSecondSection" className="container-fluid">
                    <div className="row">
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                            <div className="col-md-12">
                                {this.props.gamesRegistrationMessage? <Alert color={this.props.gamesRegistrationMessageClass}>{ this.props.error.msg.isArray ? this.props.error.msg.map(item => {return <>{item} <br/></> }): this.props.error.msg }</Alert> : null}
                                <p>Please fill in your details to register and participate in our competition. <br/>Note: All Fields are required. Please ensure that your details are correct.</p>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" name="position" placeholder="Position/Job Title" value={this.props.position} onChange={this.handleChange}/>
                                        {this.validator.message('Position', this.props.position, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" name="department" placeholder="Department/Workgroup" value={this.props.department} onChange={this.handleChange}/>
                                        {this.validator.message('Department', this.props.department, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" name="dateOfEmployment" placeholder="Employment Date (02/12/2020)" value={this.props.employmentDate} onChange={this.handleChange}/>
                                        {this.validator.message('Employment Date', this.props.dateOfEmployment, 'required')}
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" name="employmentNo" placeholder="Employment No." value={this.props.employmentNo} onChange={this.handleChange}/>
                                        {this.validator.message('Employment Number', this.props.employmentNo, 'required')}
                                    </div>
                                </div>                                
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" name="phone" placeholder="Phone Number" value={this.props.phone} onChange={this.handleChange}/>
                                        {this.validator.message('Phone number', this.props.phone, 'required')}
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="file" id="passport" name="imageUrl1" className="off"  onChange={this.handleChange}/>
                                        <label htmlFor="passport">Attach Passport</label>
                                        
                                        <input type="file" id="myForm" name="imageUrl2" className="off"  onChange={this.handleChange}/>
                                        <label htmlFor="myForm">Attach Signed Form</label>                    
                                       
                                        <div className="row">
                                            <div className="col-md-6">
                                                {this.validator.message('Picture Upload', this.props.passport, 'required')}
                                                <img src={this.props.passport} alt="Passport Upload" width="200px" height="230px"/>
                                            </div>
                                            <div className="col-md-6">
                                                {this.validator.message('Form Upload', this.props.myForm, 'required')}
                                                <img src={this.props.myForm} alt="Form Upload" width="200px" height="230px"/>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div className="row push left">
                                    <div className="col-md-12">
                                        <h5>Select the sports you will want to participate in!</h5>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Athletics" onClick={this.handleCheckbox}/> Athletics
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" value="true" name="Badminton" onClick={this.handleCheckbox}/> Badminton
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Basketball" onClick={this.handleCheckbox}/> Basketball
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Chess" onClick={this.handleCheckbox}/> Chess
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Golf" onClick={this.handleCheckbox}/> Golf
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Lawn Tennis" onClick={this.handleCheckbox}/> Lawn Tennis
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Scrabble" onClick={this.handleCheckbox}/> Scrabble
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Soccer" onClick={this.handleCheckbox}/> Soccer
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Squash" onClick={this.handleCheckbox}/> Squash
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Swimming" onClick={this.handleCheckbox}/> Swimming
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="Table Tennis" onClick={this.handleCheckbox}/> Table Tennis
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox" name="8-Ball Pool"  onClick={this.handleCheckbox}/> 8-Ball Pool
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="submit" value="Register Now"/>
                                        <p> <a href="./form.docx">Click here to download the Participant's form if you don't have</a></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
          </>
        );
    }
  
}

Register.propTypes= {	
    inputChange:PropTypes.func.isRequired,
    clearMessage:PropTypes.func.isRequired,
    showMessage:PropTypes.func.isRequired,
    checkboxChange:PropTypes.func.isRequired,
	position: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    dateOfEmployment: PropTypes.string.isRequired,
    employmentNo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    games: PropTypes.object.isRequired,
    passport: PropTypes.string.isRequired,
    myForm: PropTypes.string.isRequired,
    sports: PropTypes.array  
}
const mapStateToProps = state => ({
	position: state.register.position,
    department: state.register.department,
    dateOfEmployment: state.register.dateOfEmployment,
    employmentNo: state.register.employmentNo,
    phone: state.register.phone,
    games: state.register.games,
    passport: state.register.passport,
    myForm: state.register.myForm,
    sports: state.register.sports,
    gamesRegistrationMessage: state.auth.gamesRegistrationMessage,
    gamesRegistrationMessageClass: state.register.gamesRegistrationMessageClass,
    error: state.error,
    token: state.auth.token,
    imageUrl1: state.register.imageUrl1,  
    imageUrl2: state.register.imageUrl2,      		
})
export default connect(mapStateToProps, {inputChange, checkboxChange, clearMessage, showMessage, registerGames })(Register);
