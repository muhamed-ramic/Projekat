import React from "react";
import {Link} from "react-router-dom"

export const HeaderR = (props)=>{
	return(
     <nav className="navbar navbar-default">
     <div className="container">
     <div className="navbar-header">
     <ul className="nav navbar-nav">
     <li><Link to="/home" activeStyle={{color: "red"}}>HomeR</Link></li>
     <li><Link to={{ pathname: '/userR/7'}} activeClassName={"active"}>UserR</Link></li>	
     </ul>
     </div>
     </div>
     </nav>


		);
};