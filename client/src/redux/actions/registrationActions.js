import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./../../assets/js/tokenConfig"
import { 
    REGISTRATION_INPUT_CHANGE,
    CHECK_BOXES_CHANGE,
    GAMES_REGISTRATION_FAILURE,
    GAMES_REGISTRATION_SUCCESS,
    CLEAR_REGISTRATION_FORM,
    GET_REGISTERED_USERS }
     from './types';

export const inputChange = (name, value) => async dispatch => {
    try {       	
        dispatch({
            type: REGISTRATION_INPUT_CHANGE,
            payload:{
                name:name,
                value:value
            }
        }) 
    } catch (error) {
        console.error(error);
    }   

}

export const checkboxChange = (checkboxName) => async dispatch => {
    try {       	
        dispatch({
            type: CHECK_BOXES_CHANGE,
            payload:{
                name:checkboxName               
            }
        }) 
    } catch (error) {
        console.error(error);
    }   

}

export const registerGames = (user) => async (dispatch, getState) => {    
    try {
        const result = await axios.post('http://localhost:5000/api/v1/application/add', user, tokenConfig(getState, true));
        console.log(result);   
        document.body.classList.remove('loading-indicator');            
        dispatch({
            type: GAMES_REGISTRATION_SUCCESS            
        })
        dispatch({
            type: CLEAR_REGISTRATION_FORM           
        })         
        dispatch(returnErrors(['Application submitted successfully'], '201','GAMES_REGISTRATION_SUCCESS'));	
        
    } catch (err) {
        console.log(err.response.data);
        document.body.classList.remove('loading-indicator'); 
        const errorMessage = err.response.data.errors ? err.response.data.errors : err.response.data.error;
        if(errorMessage){
            dispatch(returnErrors(errorMessage, err.response.data.status,'GAMES_REGISTRATION_FAILURE'));
            dispatch({
                type: GAMES_REGISTRATION_FAILURE            
            })
        }       	
    }
}

export const getRegisteredUsers = () => async (dispatch, getState) => {
    try { 

        const result = await axios.get('http://localhost:5000/api/v1/application/', tokenConfig(getState));
        console.log(result.data.data);
        document.body.classList.remove('loading-indicator');
        dispatch({
            type: GET_REGISTERED_USERS,
            payload:result.data.data
        })	
    } catch (err) {
        if(err.response){
            console.log(err.response.data);
            document.body.classList.remove('loading-indicator');
            dispatch(returnErrors(err.response.data.error, err.response.data.status));
        }else{
            console.log('Something went wrong while loading Registered users records');
        }        
    }    

}