import React, {Component} from "react";
import GoogleMapReact from "google-map-react";

export class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: -31.56,
      lng: 147.53
    },
    zoom: 6
  }; //static properties -components initial state(like writing function(return center:{},zoom:11))
  
  state = {markers:[]
      
  }
  constructor(props){
  	super(props);
  }


  renderMarkers(map,maps){
      let locations = this.props.niz;

      /*let marker = new maps.Marker({position:pozicija,map,title:"Hello world"});*/
       this.state.markers = locations.map(obj=>{
         let marker = new  maps.Marker({position:obj,map,title:"Hello"});
         return marker;
      });
       let velicina = this.state.markers.length;
       for(let i=0;i<velicina;i++){
           this.state.markers[i].addListener('click',()=>{
               this.infowindow = new maps.InfoWindow();
               this.infowindow.setContent('neki tekst');
               this.infowindow.open(map,this.state.markers[i]);   
           })

       }
  }
  pozovi(){
      let markers2 = [...this.state.markers];
      for(var i=0;i<this.state.markers.length;i++)
          markers2[i].visible = false;
       this.setState({
           markers:markers2
       });
             
 }
 izvini(){
      console.log(this.state.lokacije.length);
  }
      
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDNCqyORvzeJsZYbmXdTUFtqPvu_jb9qiA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map,maps)}
        >
      <button style={{position:'relative', top:'0px',left:'5px'}} onClick={()=>this.pozovi()}>Setting components</button>
        </GoogleMapReact>
      </div>
    );
  }
};