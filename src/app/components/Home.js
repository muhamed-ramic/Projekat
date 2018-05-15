import React from "react";

export default class Home extends React.Component{

      constructor(props){
            super(props);
            this.state = {Ime:props.ime,Godine:props.godiste,Interno:"Interni tekst", funkc:props.funkcija,fn:props.funkciji};
            console.log("Constructor");
      }
      promjeniGodinu(){
    this.setState({
          Godine:this.state.Godine+1
    });
              
     }
    componentWillMount(){
          //first method which gets exec
          console.log("Component will mount");
          //if we call this.setstate in this method
         //then the render method will already take  this new state into account
         //only one rendering will be executed because  we havent render yet
         //so changing the state  doesnt trigger a re-render, the inital rendering will be changed instead

    }
    componentDidMount(){
          console.log("component did mount");
    }
    componentWilReceiveProps(nextProps){
      console.log("component will receive props",nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
       //because update is something that can happen with props and state.
       console.log("Should component update",nextProps,nextState);
       return true;//we continue here, if it i strue we can update
    }
    componentWillUpdate(nextProps,nextState){
          //we know we want to update
          console.log("component will udpate",nextProps,nextState);
    }
    componentDidUpdate(prevProps,prevState){
        //here we get the previousProps and the previousState
        //here we dont have the nextProps and nextState because the update already happened.
        console.log("component did update",prevProps,prevState); 
    }
    componentWillUnmount(){
          console.log("Component will unmount");
    }


   render(){
    return(
      <div>
      <p>This is some message from home component, lets display props!</p>
      <p>Name: {this.state.Ime}</p>
      <p>Year: {this.state.Godine}</p>
      <p>Internal text : {this.state.Interno}</p>
      <div className="container">
      <button onClick={()=>this.promjeniGodinu()} className="btn btn-primary">Change the Year++!</button>
      </div>
      
      <button onClick={this.state.funkc} className="btn btn-primary">Pozovi funkciju iz parent componenta</button>
      <hr/>
    
      </div>
      
          );
   }

};