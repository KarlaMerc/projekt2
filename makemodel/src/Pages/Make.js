import React from "react";

import firebase from '../Firebase/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Make.css';
import {Link} from 'react-router-dom';
import Header from '../Components/Header';


class Make extends React.Component{
 constructor(props){
    super(props);
    this.ref = firebase.firestore().collection("VehicleMake")
    this.unsubscribe = null;
    this.state = {
      vehicleMake : []
    };
  }
  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.oncollectionUpdate);
  }
  

  oncollectionUpdate = (querySnapshot)=>{
    const vehicleMake = [];
    querySnapshot.forEach((doc)=>{
      const {name, abbreviation} =doc.data();
      vehicleMake.push({
        key: doc.id,
        doc,
        name,
        abbreviation
      });
    });
    this.setState({
      vehicleMake
    });
  } 

  render(){
  return(

    <div>
      <Header/>

    <div class="container">
        <div class="panel panel-heading">
          <h3 class="panel heading"> Vehicle Make</h3>  
          <Link to = "/create">
          <button type="button " class="btn btn-secondary">Add Vehicle</button>    
          </Link>       
        </div>      
    </div>

    <div class="panel-body">
      <table class = "table table-stripe">
        <thead>
          <tr>
            <th> Name </th>
            <th> Abbreviation</th>
          </tr>
        </thead>
        <tbody>
          
           {this.state.vehicleMake.map(vehicleMake =>
            <tr>
              <td><Link to ={`/show/${vehicleMake.key}`}> {vehicleMake.name} </Link></td>
              <td>{vehicleMake.abbreviation}</td>
            </tr>
            )} 
          
        </tbody>
      </table>
    </div>
    </div>
  )
}
}

export default Make;
