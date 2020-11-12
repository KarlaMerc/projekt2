import React from "react";

import firebase from '../Config';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Pages/Make.css';


class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key:'',
            name:'',
            abbreviation:''
    }
    }
    componentDidMount(){
        const ref = firebase.firestore().collection('VehicleMake').doc(this.props.match.params.id);

        ref.get().then((doc)=>{
          if(doc.exists){
              const document = doc.data();
            this.setState({
                key:doc.id,
                name: document.name,
                abbreviation: document.abbreviation            
    
            });
          }else{
            console.log("No such document is here!")
          }
        });
    }
    /* componentDidMount(){
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
    }  */
    delete(id){
        firebase.firestore().collection('VehicleMake').doc(id).delete().then(()=>{
          console.log("Document is Successfully Deleted");
          this.props.history.push("/make")
        }).catch((error)=>{
          console.error("Error is", error);
        });
      }
    render(){
        return(
            <div>
                <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>

            </div>
        )
    }
}

export default Delete