import React from "react";
import {render} from "react-dom";
import SimpleMap from "./Glavni";
import {Provider} from "react-redux";
import store2 from "./store2";

class Glavni extends React.Component{
  render(){
      return(
        <Provider store={store2}>
          <SimpleMap/>
        </Provider>
          );
  }

};
render(<Glavni/>,window.document.getElementById("app"));
