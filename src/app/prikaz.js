import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

export default class Prikaz extends React.Component{
	state = {users:[]}

	componentDidMount(){
		fetch('/api/users')
		.then(res=>res.json())
		.then(users=>{
            this.setState({users})
		});
	}
	render(){
		return(
          <div>
          <h1>Users</h1>
           {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
          )}
          </div>
			);
	}
}


