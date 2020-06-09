import React, { useState } from 'react';
import './App.css';
import AddNewProject from './components/addProjectForm';

function App(props) {
  return (
    <div className='container mt-5'>
      <div className='App'>
        <AddNewProject
        // submitForm={(form) => {
        //   setFormResults(form);
        // }}
        ></AddNewProject>
      </div>
    </div>
  );
}

export default App;
