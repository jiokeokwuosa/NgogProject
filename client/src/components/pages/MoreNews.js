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
                            <h6><small>JANUARY 27, 2020</small></h6>
                            <h6 className="bold">NOGIG 2020: ExxonMobil target bright start to football title defence against NLNG</h6>
                            <p className="push">Preliminaries of the football event of the 2020 Nigeria Oil and Gas Industry Games (NOGIG) beginning Monday at the Legacy Pitch, National Stadium, Surulere, Lagos will see the defending champions, ExxonMobil taking on NLNG in the opening match. In the final of NOGIG 2018, ExxonMobil defeated hard-fighting Chevron 1-0 in a pulsating match that saw to the best of football in exhibition.<br/><br/>

“It is a game we must win in order to set a perfect tone for the successful defence of our trophy and send a signal to other contestants that we are not going to let go what we already have,” an ExxonMobil player said. In the second match, PTI and SEPLAT will take the centre stage for what has been described as a match of wits.

The two would be making a statement to other contenders as a good result for either of them could put them in a good stead to challenge for the title. <br/><br/>

The third encounter, which kicks off after lunch, features NCDMB against competition giants NNPC, while Shell and Total will renew their rivalry in the final game of Day 1.<br/><br/>

On Day 2, SEPLAT and DPR will open the day in a tricky tie that will kick start their campaign while Chevron and NCDMB take to the pitch in the second match. In other matches, Eroton will take on Shell while NAOC and NLNG will end the day in a late afternoon match. The final takes place on March 1, at the Teslim Balogun Stadium, Surulere, Lagos.</p>
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
