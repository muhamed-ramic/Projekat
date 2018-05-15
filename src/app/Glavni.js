import React, {Component} from "react"
import Prikaz from "./prikaz";
import {GetLokacije} from "./actions/osobeActions";
import {Mapa} from "./components/Mapa";
import {connect} from "react-redux";
import store2 from "./store2";



 class SimpleMap extends Component {
    
    componentDidMount(){
    store2.dispatch(GetLokacije()); 
    store2.subscribe(()=>{
     console.log(store2.getState());
    });
   }
 
  render() {
    return (
      <Mapa niz={this.props.reduc}/>
    );
  }
};

const mapStateToProps = state => {
   return {
     reduc:state.LokacijeNiz
   }; 
};

export default connect(mapStateToProps)(SimpleMap);