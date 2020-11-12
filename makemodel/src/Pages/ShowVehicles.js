import React from "react";

import firebase from '../Firebase/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Pages/Make.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Header from '../Components/Header';

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vehicleMake:[],
            key:''
        }
    }
    componentDidMount(){
        const ref = firebase.firestore().collection('VehicleMake').doc(this.props.match.params.id);

        ref.get().then((doc)=>{
          if(doc.exists){
            this.setState({
              vehicleMake:doc.data(),
              key:doc.id,
              isLoading:false
    
            });
          }else{
            console.log("No such document is here!")
          }
        });
    }
    delete(id){
        firebase.firestore().collection('VehicleMake').doc(id).delete().then(()=>{
          console.log("Document is Successfully Deleted");
          this.props.history.push("/make")
        }).catch((error)=>{
          console.error("Error is", error);
        });
      }
    render(){
        const cardStyles = { 
            width: '300px',
            height: '350px',
            backgroundColor: 'rgb(0,0,0,0.1)',
            marginTop: '60px',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent:'center',
            borderRadius: '5px',
            border: '1px solid black ',
            padding: '10px'
            };

        return(
            <div>
                <Header/>
                <Card style={cardStyles}>
                    <div class="container">
                        <div class=" panel panel-default">
                          <dl>
                              <dt>Name: </dt>
                              <dd>{this.state.vehicleMake.name}</dd>
                               <dt>Abbreviation: </dt>
                              <dd>{this.state.vehicleMake.abbreviation }</dd>
                           </dl>
                           
                        </div>
                        <div class="panel-body">
                            
                            <Link to={`/edit/${this.state.key}`} class="btn btn-success" style={{marginLeft:'20px'}}>Edit</Link>
                            <button onClick={this.delete.bind(this, this.state.key)}  class="btn btn-danger" style={{marginLeft:'10px'}}>Delete</button>
                        </div>
                    </div>

                </Card>

            </div>
        )
    }
}
export default Show