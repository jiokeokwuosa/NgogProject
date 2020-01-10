import { 
    INPUT_CHANGE,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    SHOW_MESSAGE,
    CLEAR_MESSAGE,
    CLEAR_FORM,
    REDIRECT,
    REDIRECT_LOGIN } from '../actions/types';

const initialState  = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,    
    user:{},
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkRobot: false,
    checkRobot1: true,
    signUpMessage:false,
    gamesRegistrationMessage:false,    
    signUpMessageClass:'danger',
    loginMessage:false,
    redirect:false,
    redirectLogin:false,   
    redirectRegister:false,
    redirectGallery:false,
    redirect1:false,
    passcode:'',
    form1:'on',
    form2:'off'
};

const authReducer = (state= initialState, action) =>{
    switch(action.type){        
        case INPUT_CHANGE:
            return{
                ...state,
                [action.payload.name]:action.payload.value                              
            } 
        case USER_LOADING:
            return{
                ...state                                        
            }  
        case USER_LOADED:
            return{
                ...state,               
                isAuthenticated:true,
                user:action.payload.user,
                redirect:false                             
            }   
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);            
            return{
                ...state,                
                isAuthenticated:true,
                signUpMessageClass:'success',
                loginMessage:false, 
                token:action.payload.token,
                user: action.payload.user                                                
            }
        case AUTH_ERROR:
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,               
                isAuthenticated:false,
                user:{},
                signUpMessageClass:'danger'                                       
            } 
        case SHOW_MESSAGE:
            return{
                ...state,              
                signUpMessage:true,
                loginMessage:true,
                gamesRegistrationMessage:true                              
            } 
        case CLEAR_MESSAGE:
            return{
                ...state,
                signUpMessage:false,
                loginMessage:false,
                gamesRegistrationMessage:false                                           
            } 
        case CLEAR_FORM:
            return{
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                checkRobot: false, 
                redirect:false                                          
            } 
        case REDIRECT:
            return{
                ...state,
               redirect:true                           
            } 
        case REDIRECT_LOGIN:
            return{
                ...state,
                redirect1:true                           
            } 
            
        default:
            return state;
        
    }
}
export default authReducer;