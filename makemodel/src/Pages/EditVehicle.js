import React from "react";

import firebase from '../Firebase/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Pages/Make.css';
import {Card} from 'react-bootstrap';
import Header from '../Components/Header';


class EditVehicle extends React.Component{
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
    onChange = (e) =>
    {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({document:state});
    }
    onSubmit =(e)=>
    {
        e.preventDefault();
        const{name,abbreviation} = this.state;
        const updateRef = firebase.firestore().collection('VehicleMake').doc(this.state.key);
        updateRef.set({
            name,
            abbreviation
        }).then((docRef)=>{
            this.setState({
                key:'',
                name:'',
                abbreviation:''
            });
            this.props.history.push("/make/"+this.props.match.params.id)
        })
        .catch((error)=>{
            console.error("Error editing the document: ", error);
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
            }
        return(
            <div>
                <Header/>
                <Card style ={cardStyles}>

                    <div class="container">
                        <div class=" panel panel-default">
                            
                        <div class="panel-body">
                            <form onSubmit = {this.onSubmit}>
                            <div>
                                <div  class="form-group"></div>
                                <label for = "name">Vehicle Name:</label>
                                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Please Enter Name"></input>
                            </div>  
                            <div>
                                <div  class="form-group"></div>
                                <label for = "abbreviation">Vehicle Abbreviation:</label>
                                <input type="text" class="form-control" name="abbreviation" value ={this.state.abbreviation} onChange={this.onChange} placeholder="Abbreviation"></input>

                            </div>  
                            <button type="submit" class="btn btn-success">Submit</button>
                            </form>
                            
                         </div>
                       </div>
                    </div>
                </Card>

            </div>
        )
    }
}

export default EditVehicle