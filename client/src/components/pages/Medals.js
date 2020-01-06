import React, {Component} from 'react';
import Logout from '../includes/Logout';

class Medals extends Component {
    constructor(props){
        super(props);  
        this.state={
            value:'overall'
        };   
        this.handleChange=this.handleChange.bind(this);   
    }
    async handleChange(event){
      await this.setState({
            value:event.target.value
      });    
    }
    render(){
        const {value} =this.state;        
        return (
            <>
                <Logout/>
                <div id="medalFirstSection" className="container-fluid relative">
                    <div className="row">

                    </div>
                    <div className="overlay"></div>                         
                </div>     
                <div id="medalSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Medal History of NOGIG Games</h2>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="overall">Overall</option>
                                <option value="2018">2018</option>
                                <option value="2016">2016</option>
                                <option value="2014">2014</option>
                            </select><br/><br/>
                          <table id="overall" className={`table table-bordered ${value === 'overall'? '':'off'} `}>
                              <thead>
                                  <tr>
                                      <td colSpan="5">Overall Results</td>
                                  </tr>
                                  <tr>
                                      <th>S/N</th>
                                      <th>Companies</th>
                                      <th>Gold</th>
                                      <th>Silver</th>
                                      <th>Bronze</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>SHELL</td>
                                      <td>36</td>
                                      <td>33</td>
                                      <td>30</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>NNPC</td>
                                      <td>36</td>
                                      <td>38</td>
                                      <td>45</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>CHEVRON</td>
                                      <td>21</td>
                                      <td>13</td>
                                      <td>16</td>
                                  </tr>
                                  <tr>
                                      <td>4</td>
                                      <td>EXXONMOBILE</td>
                                      <td>11</td>
                                      <td>17</td>
                                      <td>24</td>
                                  </tr>
                                  <tr>
                                      <td>5</td>
                                      <td>NLNG</td>
                                      <td>11</td>
                                      <td>11</td>
                                      <td>18</td>
                                  </tr>
                                  <tr>
                                      <td>6</td>
                                      <td>TOTAL</td>
                                      <td>7</td>
                                      <td>12</td>
                                      <td>15</td>
                                  </tr>
                                  <tr>
                                      <td>7</td>
                                      <td>NAOC</td>
                                      <td>4</td>
                                      <td>8</td>
                                      <td>11</td>
                                  </tr>
                                  <tr>
                                      <td>8</td>
                                      <td>NCDMB</td>
                                      <td>3</td>
                                      <td>6</td>
                                      <td>9</td>
                                  </tr>
                                  <tr>
                                      <td>9</td>
                                      <td>PTI</td>
                                      <td>3</td>
                                      <td>2</td>
                                      <td>6</td>
                                  </tr>                                  
                                  <tr>
                                      <td>10</td>
                                      <td>DPR</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>11</td>
                                  </tr>
                                  <tr>
                                      <td>11</td>
                                      <td>OANDO</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr>
                                  <tr>
                                      <td>12</td>
                                      <td>EROTON</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                                  <tr>
                                      <td>13</td>
                                      <td>ADDAX</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr>
                                  <tr>
                                      <td>14</td>
                                      <td>OVH</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                                  <tr>
                                      <td>15</td>
                                      <td>SEPLAT</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                              </tbody>
                          </table>
                          <table id="2018" className={`table table-bordered ${value === '2018'? '':'off'} `}>
                              <thead>
                                  <tr>
                                      <td colSpan="5">2018 Results</td>
                                  </tr>
                                  <tr>
                                      <th>S/N</th>
                                      <th>Companies</th>
                                      <th>Gold</th>
                                      <th>Silver</th>
                                      <th>Bronze</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>SHELL</td>
                                      <td>11</td>
                                      <td>12</td>
                                      <td>11</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>NNPC</td>
                                      <td>9</td>
                                      <td>12</td>
                                      <td>14</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>CHEVRON</td>
                                      <td>8</td>
                                      <td>3</td>
                                      <td>5</td>
                                  </tr>
                                  <tr>
                                      <td>4</td>
                                      <td>NLNG</td>
                                      <td>5</td>
                                      <td>5</td>
                                      <td>5</td>
                                  </tr>
                                  <tr>
                                      <td>5</td>
                                      <td>EXXONMOBILE</td>
                                      <td>3</td>
                                      <td>5</td>
                                      <td>6</td>
                                  </tr>
                                  <tr>
                                      <td>6</td>
                                      <td>NAOC</td>
                                      <td>2</td>
                                      <td>2</td>
                                      <td>9</td>
                                  </tr>
                                  <tr>
                                      <td>7</td>
                                      <td>TOTAL</td>
                                      <td>3</td>
                                      <td>4</td>
                                      <td>7</td>
                                  </tr>
                                  <tr>
                                      <td>8</td>
                                      <td>NCDMB</td>
                                      <td>2</td>
                                      <td>4</td>
                                      <td>5</td>
                                  </tr>
                                  <tr>
                                      <td>9</td>
                                      <td>DPR</td>
                                      <td>1</td>
                                      <td>1</td>
                                      <td>2</td>
                                  </tr>
                                  <tr>
                                      <td>10</td>
                                      <td>EROTON</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr>
                                  <tr>
                                      <td>11</td>
                                      <td>PTI</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                                  <tr>
                                      <td>12</td>
                                      <td>OVH</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                                  <tr>
                                      <td>12</td>
                                      <td>SEPLAT</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>-</td>
                                  </tr>
                              </tbody>
                          </table>
                          <table id="2016" className={`table table-bordered ${value === '2016'? '':'off'} `}>
                              <thead>
                                  <tr>
                                      <td colSpan="5">2016 Results</td>
                                  </tr>
                                  <tr>
                                      <th>S/N</th>
                                      <th>Companies</th>
                                      <th>Gold</th>
                                      <th>Silver</th>
                                      <th>Bronze</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>SHELL</td>
                                      <td>14</td>
                                      <td>14</td>
                                      <td>9</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>NNPC</td>
                                      <td>13</td>
                                      <td>15</td>
                                      <td>18</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>CHEVRON</td>
                                      <td>5</td>
                                      <td>5</td>
                                      <td>5</td>
                                  </tr>
                                  <tr>
                                      <td>4</td>
                                      <td>EXXONMOBILE</td>
                                      <td>5</td>
                                      <td>2</td>
                                      <td>7</td>
                                  </tr>
                                  <tr>
                                      <td>5</td>
                                      <td>NLNG</td>
                                      <td>4</td>
                                      <td>4</td>
                                      <td>8</td>
                                  </tr>
                                  <tr>
                                      <td>6</td>
                                      <td>PTI</td>
                                      <td>1</td>
                                      <td>2</td>
                                      <td>4</td>
                                  </tr>
                                  <tr>
                                      <td>7</td>
                                      <td>TOTAL</td>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>6</td>
                                  </tr>
                                  <tr>
                                      <td>8</td>
                                      <td>NCDMB</td>
                                      <td>0</td>
                                      <td>2</td>
                                      <td>3</td>
                                  </tr>
                                  <tr>
                                      <td>9</td>
                                      <td>DPR</td>
                                      <td>0</td>
                                      <td>0</td>
                                      <td>0</td>
                                  </tr>                                  
                              </tbody>
                          </table>
                          <table id="2014" className={`table table-bordered ${value === '2014'? '':'off'} `}>
                              <thead>
                                  <tr>
                                      <td colSpan="5">2014 Results</td>
                                  </tr>
                                  <tr>
                                      <th>S/N</th>
                                      <th>Companies</th>
                                      <th>Gold</th>
                                      <th>Silver</th>
                                      <th>Bronze</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>NNPC</td>
                                      <td>14</td>
                                      <td>11</td>
                                      <td>13</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>SHELL</td>
                                      <td>11</td>
                                      <td>7</td>
                                      <td>10</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>CHEVRON</td>
                                      <td>8</td>
                                      <td>5</td>
                                      <td>6</td>
                                  </tr>
                                  <tr>
                                      <td>4</td>
                                      <td>EXXONMOBILE</td>
                                      <td>3</td>
                                      <td>10</td>
                                      <td>11</td>
                                  </tr>
                                  <tr>
                                      <td>5</td>
                                      <td>TOTAL</td>
                                      <td>3</td>
                                      <td>4</td>
                                      <td>2</td>
                                  </tr>
                                  <tr>
                                      <td>6</td>
                                      <td>NAOC</td>
                                      <td>2</td>
                                      <td>6</td>
                                      <td>2</td>
                                  </tr>
                                  <tr>
                                      <td>7</td>
                                      <td>NLNG</td>
                                      <td>2</td>
                                      <td>2</td>
                                      <td>5</td>
                                  </tr>
                                  <tr>
                                      <td>8</td>
                                      <td>PTI</td>
                                      <td>2</td>
                                      <td>-</td>
                                      <td>2</td>
                                  </tr>
                                  <tr>
                                      <td>9</td>
                                      <td>NCDMB</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr>  
                                  <tr>
                                      <td>10</td>
                                      <td>OANDO</td>
                                      <td>1</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr> 
                                  <tr>
                                      <td>11</td>
                                      <td>DPR</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>11</td>
                                  </tr> 
                                  <tr>
                                      <td>12</td>
                                      <td>ADDAX</td>
                                      <td>-</td>
                                      <td>-</td>
                                      <td>1</td>
                                  </tr>                                    
                              </tbody>
                           </table>                    
                        </div>
                    </div>
                </div>
            </>
        );
    }
  
}

export default Medals;
