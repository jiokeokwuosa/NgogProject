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
                            <h6><small>NOVEMBER 6, 2019 BY ORIENTALNEWSNG</small></h6>
                            <h6 className="bold">Dangote group is considering exporting petroleum products from its refinery to Europe, South America, West Africa and Central Africa.</h6>
                            <p className="push">The company stated this on Sunday during a visit by a delegation led by the Minister of State for Petroleum Resources, Chief Timipre Sylva, to the refinery site in Lagos.<br/><br/>
                                The Executive Director, Strategy, Capital Projects and Portfolio Development, Dangote Group, Devakumar Edwin, said products from the refinery, with a capacity to process 650,000 barrels per day, could be marketed anywhere in the world.<br/>
                                <Link to="/">Read More</Link>
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
