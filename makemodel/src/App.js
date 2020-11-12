import React from "react";
import {Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Home from './Pages/HomePage';
import Make from './Pages/Make';
import Models from './Vehicle-Model/Models';
import AddVehicle from './Pages/AddVehicle';
import EditVehicle from './Pages/EditVehicle';
import {BrowserRouter} from 'react-router-dom';
import Show from './Pages/ShowVehicles';

function App(){
  return(
    <div className="App">
      <BrowserRouter>
            <Route exact path ="/" component = {Home}></Route>
            <Route  path ="/make" component = {Make}></Route>
            <Route  path ="/create" component = {AddVehicle}></Route>
            <Route  path ="/show/:id" component = {Show}></Route>
            <Route  path ="/edit/:id" component = {EditVehicle}></Route>
            <Route  path ="/models" component = {Models}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
