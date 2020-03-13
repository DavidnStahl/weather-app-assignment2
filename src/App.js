import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchResultComponent from './app_component/searchResultComponent';
import Header from './app_component/header'


function App() {
  return (
    <div>
    <Header/>
      <SearchResultComponent/>
    </div>
  )
}

export default App

