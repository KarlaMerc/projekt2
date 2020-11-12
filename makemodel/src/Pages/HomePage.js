import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './HomePage.css';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from '../Components/Header';

class Home extends React.Component{
  constructor(props){
    super(props);
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
  

  return (
    <div>
       <Header/>
      <div>
            <Card style={cardStyles}>
                  <div>
                        <Link to="/make">
                        <button type="button" class="btn btn-secondary btn-lg btn-block" >Vehicle Make</button>
                        </Link>
                        <br/>
                        <Link to="/models">
                        <button type="button" class="btn btn-secondary btn-lg btn-block" >Vehicle Models</button>
                        </Link>
                  </div>
            </Card>
      </div>
    </div>
  )

 }
}

export default Home;