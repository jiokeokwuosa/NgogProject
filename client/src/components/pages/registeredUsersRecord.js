import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getRegisteredUsers} from '../../redux/actions/registrationActions';
import Record from "./../includes/Record";
import PropTypes from "prop-types";
import Logout from '../includes/Logout';
import { ExportReactCSV } from '../includes/data';

class RegisteredUsersRecord extends Component {
    componentDidMount(){
        this.props.getRegisteredUsers();
        window.scrollTo(0, 0);
    }
    recordList(){
  
        let sn =0;
        if(this.props.registeredUsers.length){
            return this.props.registeredUsers.map(user => {
                ++sn;
                return <Record user={user} sn={sn}/>            
            })
        }else{
           return <h2>No Registered User</h2>
        }
		
	}	
    
    render(){
        return (
            <>
              <Logout/>  
              <h2 className="center myRecord">Users that registered for the games</h2>
              <h5 className="center"><ExportReactCSV csvData={this.props.registeredUsers} fileName='Data.csv' /></h5>  
              <table className="table table-light center">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Names</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Sports</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.recordList()}              
                </tbody>
              </table>

           
            </>
          );
    }  
}
RegisteredUsersRecord.propTypes= {	
    getRegisteredUsers:PropTypes.func.isRequired    
}
const mapStateToProps = state => ({	
    registeredUsers: state.register.registeredUsers         		
})
export default connect(mapStateToProps, { getRegisteredUsers })(RegisteredUsersRecord);

