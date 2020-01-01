import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./../../assets/js/tokenConfig";
import { 
    INPUT_CHANGE,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS, 
    USER_LOADING,
    USER_LOADED,
    SHOW_MESSAGE,
    CLEAR_MESSAGE,
    CLEAR_FORM,
    REDIRECT} 
    from './types';    
    
export const inputChange = (name, value) => async dispatch => {
    try {       	
        dispatch({
            type: INPUT_CHANGE,
            payload:{
                name:name,
                value:value
            }
        }) 
    } catch (error) {
        console.error(error);
    }    

}

export const loadUser = () => async (dispatch, getState) => {
    try { 
        //user loading      	
        dispatch({
            type: USER_LOADING            
        });        

        // const result = await axios.get('https://localhost:5000/api/v1/auth/user', tokenConfig(getState));
        const result = await axios.get('https://ngog.herokuapp.com/api/v1/auth/user', tokenConfig(getState));
        
        console.log(result.data.data);
        document.body.classList.remove('loading-indicator');
        dispatch({
            type: USER_LOADED,
            payload:result.data.data
        })	
    } catch (err) {
        if(err.response){
            console.log(err.response.data);
            document.body.classList.remove('loading-indicator');
            dispatch(returnErrors(err.response.data.error, err.response.data.status));
        }else{
            console.log('Something went wrong while loading user');
        }
        dispatch({
            type: AUTH_ERROR            
        })	
    }    

}

export const registerUser = (user) => async dispatch => {    
    try {
        // const result = await axios.post('https://localhost:5000/api/v1/auth/signup', user);
        const result = await axios.post('https://ngog.herokuapp.com/api/v1/auth/signup', user);        
        console.log(result.data.data);  
        document.body.classList.remove('loading-indicator');                 
        dispatch({
            type: REGISTER_SUCCESS,
            payload:result.data.data
        })        
        dispatch({
            type: CLEAR_FORM           
        })         
        dispatch(returnErrors(['Account Created Successfully'], '201','REGISTER_SUCCESS'));	
        
    } catch (err) {
        console.log(err.response.data); 
        document.body.classList.remove('loading-indicator');        
        const errorMessage = err.response.data.errors ? err.response.data.errors : err.response.data.error;
        dispatch(returnErrors(errorMessage, err.response.data.status,'REGISTER_FAILURE'));
        dispatch({
            type: REGISTER_FAILURE            
        })	
    }
}

export const showMessage = () => async dispatch => {    
    try {       
        dispatch({
            type: SHOW_MESSAGE            
        })	
        
    } catch (err) {
        console.log(err);
       
    }
}

export const clearMessage = () => async dispatch => {    
    try {       
        dispatch({
            type: CLEAR_MESSAGE            
        })	
        
    } catch (err) {
        console.log(err);
       
    }
}

export const loginUser = (user) => async dispatch => {    
    try {
        // const result = await axios.post('https://localhost:5000/api/v1/auth/login', user);
        const result = await axios.post('https://ngog.herokuapp.com/api/v1/auth/login', user);
        console.log(result.data.data);   
        document.body.classList.remove('loading-indicator');                 
        dispatch({
            type: LOGIN_SUCCESS,
            payload:result.data.data
        })   
        dispatch({
            type: REDIRECT           
        })   
        dispatch({
            type: CLEAR_FORM           
        })         
    } catch (err) {     
        document.body.classList.remove('loading-indicator'); 
        console.log(err);  
            const errorMessage = err.response.data.errors ? err.response.data.errors : err.response.data.error;
            dispatch(returnErrors(errorMessage, err.response.data.status,'LOGIN_FAILURE'));
            dispatch({
                type: LOGIN_FAILURE            
            })	
               
    }
}

export const logoutUser = () => async dispatch => {    
    try {       
        dispatch({
            type: LOGOUT_SUCCESS           
        })
        dispatch({
            type: REDIRECT           
        })
        
    } catch (err) {
        console.log(err);
       
    }
}
