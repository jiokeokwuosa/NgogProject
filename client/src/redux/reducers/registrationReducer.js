import { 
    REGISTRATION_INPUT_CHANGE,
    CHECK_BOXES_CHANGE,
    GAMES_REGISTRATION_FAILURE,
    GAMES_REGISTRATION_SUCCESS,
    CLEAR_REGISTRATION_FORM,
    GET_REGISTERED_USERS
} from '../actions/types';

const initialState  = {
    isLoading:false,
    position: '',
    department: '',
    dateOfEmployment: '',
    employmentNo: '',
    phone: '',
    passport:'',
    myForm:'',
    sports: [
        {
            name: "Athletics"        
        },
        {
            name: "Badminton"         
        },
        {
            name: "Basketball"         
        },
        {
            name: "Chess"         
        },
        {
            name: "Golf"         
        },
        {
            name: "Lawn Tennis"         
        },
        {
            name: "Scrabble"         
        },
        {
            name: "Soccer"         
        },
        {
            name: "Squash"         
        },
        {
            name: "Swimming"         
        },
        {
            name: "Table Tennis"         
        },
        {
            name: "8-Ball Pool"         
        }
    ],
    games: {        
    },
    gamesRegistrationMessageClass:'danger',
    imageUrl1:null,
    imageUrl2:null,
    registeredUsers:[]      
};

const registrationReducer = (state= initialState, action) =>{
    switch(action.type){        
        case REGISTRATION_INPUT_CHANGE:
            return{
                ...state,
                [action.payload.name]:action.payload.value                              
            }  
        case CHECK_BOXES_CHANGE:
            state.games[action.payload.name]= !state.games[action.payload.name];
            return{
                ...state                                          
            }
        case CLEAR_REGISTRATION_FORM:            
            return{
                isLoading:false,
                position: '',
                department: '',
                dateOfEmployment: '',
                employmentNo: '',
                phone: '',
                passport:'',
                myForm:'',   
                games: {                    
                }                                           
            } 
        case GAMES_REGISTRATION_SUCCESS:           
            return{
                ...state,
                gamesRegistrationMessageClass:'success'                                             
            }  
        case GAMES_REGISTRATION_FAILURE:           
            return{
                ...state,
                gamesRegistrationMessageClass:'danger',
                games: {                    
                }                                               
            }  
        case GET_REGISTERED_USERS:           
            return{
                ...state,
                registeredUsers:action.payload
                                                            
            }         
        default:
            return state;
        
    }
}
export default registrationReducer;