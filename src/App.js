import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchResultComponent from './app_component/searchResultComponent';
import Header from './app_component/header'

function onLoad(){
  if(window.location.protocol==="https:")
           window.location.protocol="http";
}
onLoad()

function App() { 
  return (
    <div className="App">
    <Header/>
      <SearchResultComponent/>
    </div>
  )
}

export default App

