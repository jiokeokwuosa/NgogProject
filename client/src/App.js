import React, { useEffect } from "react";
import Axios from 'axios';
import { Provider } from "react-redux";
import store from './redux/store'
import NavBar from "./components/includes/Nav";
import { loadUser } from "./redux/actions/authActions";

const App= () => {

	useEffect(() => {
		Axios.interceptors.request.use(function (config) {			
			document.body.classList.add('loading-indicator');		  
			return config
		  }, function (error) {
			return Promise.reject(error);
		});			 
		store.dispatch(loadUser());			
	});	

	return (
		
		<Provider store={store}>	  
			<NavBar/>		
		</Provider>
	);	
}

export default App;