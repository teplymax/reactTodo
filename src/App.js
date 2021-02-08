import React from "react";
import {connect} from 'react-redux';
import Context from './context'

import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Tasks from './Components/Tasks/Tasks'

function  App()  {
  let[showForm,setShowForm]=React.useState(false);
  
  const closeForm=()=>{
    let newState=false;
    setShowForm(newState);
}

const toggleForm=()=>{
  let newState=!showForm;
    setShowForm(newState);
}

  return (
    <Context.Provider value={{toggleForm,closeForm,showForm}}>
    <div className="App">
      <Sidebar />
      <Tasks/>
    </div>
    </Context.Provider>
  );
  
}

export default connect(null,null)(App);
