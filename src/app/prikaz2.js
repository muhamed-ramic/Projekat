import React from "react";

export default class Show extends React.Component{
	constructor(){
		super();
		this.state = {podaci:[]};
	}
	componentDidMount(){
		fetch("/api/lokacije")
		.then(res=>res.json())
		.then(data=>{
			let lok = data.res.map(obj=>{
				return(
                     <div>
                      <p>obj.lat</p>
                     </div>
                 
			   )

           })
			
		 this.setState({podaci:lok})
		})
	}
  render(){

  	return(
        <div>
          {this.state.podaci}
        </div>
  		);
  }

};
