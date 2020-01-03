import React, { useState } from "react";
import Footer from "./Footer";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logoutUser } from "./../../redux/actions/authActions";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./../pages/Homepage";
import About from "./../pages/About";
import Sports from "./../pages/Sports";
import Contact from "./../pages/Contact";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import LatestNews from "./../pages/LatestNews";
import Medals from "./../pages/Medals";
import Athletics from "./../pages/Athletics";
import Badminton from "./../pages/Badminton";
import Basketball from "./../pages/Basketball";
import Chess from "./../pages/Chess";
import Golf from "./../pages/Golf";
import LawnTennis from "./../pages/LawnTennis";
import Pool from "./../pages/Pool";
import Scrabble from "./../pages/Scrabble";
import Soccer from "./../pages/Soccer";
import Squash from "./../pages/Squash";
import Swimming from "./../pages/Swimming";
import TableTennis from "./../pages/TableTennis";
import Register from "./../pages/Register";
import Record from "./../pages/registeredUsersRecord";
import Gallery from "./../pages/Gallery";
import MoreNews from "./../pages/MoreNews";

const MyNav = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const logOut = e => {
		e.preventDefault();		
		props.logoutUser();			
	}
				
	return (
		<Router>				 
			<Navbar color="light" light expand="md">			
				<NavbarBrand tag={Link} to="/">
					<img src={require('../../assets/img/logo.png')} alt="NGOG logo"/>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret tag={Link} to="/about">
								THE NOGIG
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem tag={Link} to="/medals">
									Medals History
								</DropdownItem>								
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret tag={Link} to="/sports">
								NOGIG SPORTS
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem tag={Link} to="/athletics" >
									Athletics
								</DropdownItem>	
								<DropdownItem tag={Link} to="/badminton">
									Badminton
								</DropdownItem>	
								<DropdownItem tag={Link} to="/basketBall">
									Basketball
								</DropdownItem>	
								<DropdownItem tag={Link} to="/chess">
									Chess
								</DropdownItem>	
								<DropdownItem tag={Link} to="/golf">
									Golf
								</DropdownItem>	
								<DropdownItem tag={Link} to="/lawnTennis">
									Lawn Tennis
								</DropdownItem>							
								<DropdownItem tag={Link} to="/scrabble">
									Scrabble
								</DropdownItem>	
								<DropdownItem tag={Link} to="/soccer">
									Soccer
								</DropdownItem>	
								<DropdownItem tag={Link} to="/squash">
									Squash
								</DropdownItem>	
								<DropdownItem tag={Link} to="/swimming">
									Swimming
								</DropdownItem>
								<DropdownItem tag={Link} to="/tableTennis">
									Table Tennis
								</DropdownItem>
								<DropdownItem tag={Link} to="/pool">
									8-Ball Pool
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret tag={Link} to="/">
								COMMUNITY
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem tag={Link} to="/news">
									Latest News
								</DropdownItem>	
								{props.user.isAuthenticated ? 
								<DropdownItem tag={Link} to="/gallery">
									Gallery
								</DropdownItem>	 : null}
															
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink tag={Link} to="/contact">
								CONTACTS
							</NavLink>
						</NavItem>						
						{props.user.isAdmin ? <NavItem>							
							<NavLink tag={Link} to="/record">
								GAMES DATA 
							</NavLink>
						</NavItem> : null}	
						{props.isAuthenticated ? <NavItem>							
							<NavLink tag={Link} to="/" onClick={logOut}>
								LOGOUT 
							</NavLink>
						</NavItem> : <NavItem>
							<NavLink tag={Link} to="/login">
								THE PORTAL
							</NavLink>
						</NavItem>}					
					</Nav>
				</Collapse>
			</Navbar>		
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/about" component={About} />
				<Route path="/sports" component={Sports} />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/news" component={LatestNews} />
				<Route path="/medals" component={Medals} />
				<Route path="/athletics" component={Athletics} />
				<Route path="/badminton" component={Badminton} />
				<Route path="/basketBall" component={Basketball} />
				<Route path="/chess" component={Chess} />
				<Route path="/golf" component={Golf} />
				<Route path="/lawnTennis" component={LawnTennis} />
				<Route path="/pool" component={Pool} />
				<Route path="/scrabble" component={Scrabble} />
				<Route path="/soccer" component={Soccer} />
				<Route path="/squash" component={Squash} />
				<Route path="/swimming" component={Swimming} />
				<Route path="/tableTennis" component={TableTennis} />
				<Route path="/register" component={Register} />
				<Route path="/record" component={Record} />
				<Route path="/more-news" component={MoreNews} />
				<Route path="/gallery" component={Gallery} />
			</Switch>	
		  <Footer/>
		</Router>
	);
};
MyNav.propTypes= {	
    logoutUser:	PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	user: PropTypes.object		
}
const mapStateToProps = state => ({	   
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
	redirect: state.auth.redirect 
})
export default connect(mapStateToProps, {logoutUser})(MyNav);
