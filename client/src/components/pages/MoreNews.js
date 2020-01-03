import React, {Component} from 'react';
import Logout from '../includes/Logout';

class MoreNews extends Component {
    constructor(props){
        super(props);  
        this.state={
            value:''
        };   
        this.handleChange=this.handleChange.bind(this);   
    }
    componentDidMount(){
        window.scrollTo(0, 0);
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
                <div id="newsSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <h6><small>NOVEMBER 6, 2019 BY ORIENTALNEWSNG</small></h6>
                            <h6 className="bold">Dangote group is considering exporting petroleum products from its refinery to Europe, South America, West Africa and Central Africa.</h6>
                            <p className="push">The company stated this on Sunday during a visit by a delegation led by the Minister of State for Petroleum Resources, Chief Timipre Sylva, to the refinery site in Lagos.<br/><br/>
                                The Executive Director, Strategy, Capital Projects and Portfolio Development, Dangote Group, Devakumar Edwin, said products from the refinery, with a capacity to process 650,000 barrels per day, could be marketed anywhere in the world.<br/>                           
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

export default MoreNews;
