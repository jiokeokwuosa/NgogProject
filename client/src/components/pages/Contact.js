import React, {Component} from 'react';
import Logout from '../includes/Logout';

class Contact extends Component {
    constructor(props){
        super(props);  
        this.state={
            value:''
        };   
        this.handleChange=this.handleChange.bind(this);   
    }
    async handleChange(event){
      await this.setState({
            value:event.target.value
      });    
    }
    render(){           
        return (
            <>
                <Logout/>
                <div id="contactFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6">   
                            <h3>Keep in Touch</h3>                             
                            <h2 className="bold">CONTACT US</h2> 
                            <hr/><br/>                         
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="contactSecondSection" className="container-fluid">
                    <div className="row">
                        <form>
                            <div className="col-md-12">
                                <p>Please fill in your details to contact us<br/> and we will get back to you</p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Enter Full Name" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="email" placeholder="Enter Email" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <textarea>

                                        </textarea>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="contactThirdSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="bold">FOLLOW US</h2>
                            <hr/><br/>
                            <div className="row">               
                                <div className="col-md-2"><img src={require('../../assets/img/facebook icons.png')} alt="social media"/> </div>
                                <div className="col-md-2"><img src={require('../../assets/img/linkedln icon.png')} alt="social media"/> </div>
                                <div className="col-md-2"><img src={require('../../assets/img/pintrest icons.png')} alt="social media"/>  </div>
                                <div className="col-md-2"><img src={require('../../assets/img/twitter icons.png')} alt="social media"/> </div>
                                <div className="col-md-2"><img src={require('../../assets/img/youtube icons.png')} alt="social media"/> </div>
                                <div className="col-md-2"><img src={require('../../assets/img/instagram icons.png')} alt="social media"/> </div>  
                            </div>
                        </div>        
                    </div>
                </div>   
          </>
        );
    }
  
}

export default Contact;
