import React from "react";

import firebase from '../Firebase/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Pages/Make.css';
import {Card} from 'react-bootstrap';
import Header from '../Components/Header';

class AddVehicle extends React.Component{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('VehicleMake');
        this.state ={
            name:'',
            abbreviation:'',
        }
    }

    onChange = (e) =>
    {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit =(e)=>
    {
        e.preventDefault();
        const{name,abbreviation} = this.state;
        this.ref.add({
            name,
            abbreviation
        }).then((docRef)=>{
            this.setState({
                name:'',
                abbreviation:''
            });
            this.props.history.push("/make")
        })
        .catch((error)=>{
            console.error("Error adding document: ", error);
        });
    }
    render(){
        const {name, abbreviation} = this.state;
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

                <Card style={cardStyles}>
                    <div>
                    <div>
                        <div  class="form-group"></div>
                        <label for = "name">Vehicle Name:</label>
                        <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Please Enter Name"></input>
                    </div>  
                    <div>
                        <div  class="form-group"></div>
                        <label for = "abbreviation">Vehicle Abbreviation:</label>
                        <input type="text" class="form-control" name="abbreviation" value ={abbreviation} onChange={this.onChange} placeholder="Abbreviation"></input>

                    </div>  
                    </div>

                    <div>
                        <button type="button" class="btn btn-success" onClick={this.onSubmit}>Save</button>
                    </div>
                </Card>
            </div>
            
        )
    }
}

export default AddVehicle