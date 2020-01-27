import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Logout from '../includes/Logout';

class Forum extends Component {
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
                <div id="newsFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6">   
                            <h3><small>For industry related news,<br/> NGOG news and events</small></h3>                             
                            <h1 className="bold">LATEST NEWS</h1> 
                            <hr/><br/>                         
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="newsSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <h6><small>JANUARY 27, 2020</small></h6>
                            <h6 className="bold">NOGIG 2020: ExxonMobil target bright start to football title defence against NLNG.</h6>
                            <p className="push"> Preliminaries of the football event of the 2020 Nigeria Oil and Gas Industry Games (NOGIG) beginning Monday at the Legacy Pitch, National Stadium, Surulere, Lagos will see the defending champions, ExxonMobil taking on NLNG in the opening match. In the final of NOGIG 2018, ExxonMobil defeated hard-fighting Chevron 1-0 in a pulsating match that saw to the best of football in exhibition.<br/>
                                <Link to="/more-news">Read More</Link>
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={ require('../../assets/img/News page.jpg')} alt="img"/>
                        </div>
                    </div>
                </div>
           </>
        );
    }
  
}

export default Forum;
