import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from '../includes/Logout';

class Homepage1 extends Component {
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
                <div id="homepage1FirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6 me"> 
                            <h2 className="bold">WE LOVE<br/> NOGIG</h2>  
                            <hr/><br/><br/>      
                            <h5>Don't walk through life just participating in sports,<br/>Don't  walk through life being an active athletics.<br/>Athletics will fade. Character and integrity really make an impact on someone's life, that's the<br/>ultimate vision, that's the ultimate goal.</h5>                    
                            <Link to="/register">REGISTER FOR GAMES 2020</Link>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="contactThirdSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="bold">FOLLOW US</h2>
                            <hr/><br/>
                            <div className="row">               
                                <div className="col-md-2"><a href='https://www.facebook.com/offocialnogig/ ' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/facebook icons.png')} alt="social media"/></a> </div>
                                <div className="col-md-2"><a href='https://www.facebook.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/linkedln icon.png')} alt="social media"/> </a> </div>
                                <div className="col-md-2"><a href='https://www.pinterest.com/officialnogig/ ' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/pintrest icons.png')} alt="social media"/> </a> </div>
                                <div className="col-md-2"><a href='https://twitter.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/twitter icons.png')} alt="social media"/> </a> </div>
                                <div className="col-md-2"><a href='https://www.youtube.com/officialnogig' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/youtube icons.png')} alt="social media"/></a> </div>
                                <div className="col-md-2"><a href='https://www.instagram.com/officialnogig/' target="_blank" rel="noopener noreferrer"> <img src={require('../../assets/img/instagram icons.png')} alt="social media"/></a> </div>  
                            </div>
                        </div>        
                    </div>
                </div>   
          </>
        );
    }
  
}

export default Homepage1;
