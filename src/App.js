import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableReferees from './TableReferees';
import React, { useState } from "react";

function App() {

  return (
    <div className="App">
      <TableReferees />
    </div>
  );
}

export default App;
