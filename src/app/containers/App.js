import React from "react";
import {connect} from "react-redux" 
import { User } from '../components/User';
import { Main } from '../components/Main';
import {setName}from "../actions/useractions"


 class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={()=> this.props.setName("NESTO")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
   return {
     user:state.user,
     math:state.Math
   }; 
};
const mapDispatchToProps = (dispatch)=>{
   return {
     setName:(name)=>{
         dispatch(setName(name));
     }
   }; 
};


export default connect(mapStateToProps,mapDispatchToProps)(App);//withouT () because with () 
//we would immediatly execute functions like mapstate  

