import React, { Component } from 'react';
import Weather from './weather';

const API_Key = "d8f0bc5b04e20b0c7533536f49160c54"

class SearchResultComponent extends Component {
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      //temp: undefined,
      description:undefined,
      weathericon:undefined
    };
    this.getWeather();
  }
  getWeather = async () => {
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=${API_Key}`)
   const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}`)
   
   const response = await api_call.json();
   const response2 = await api_call2.json();

   console.log(response)
   console.log(response.list[0].main.temp)

   this.setState({
     city: response.list[0].name,
     temp: response.list[0].main.temp,
     description: response2.weather[0].description,
     weathericon: response2.weather[0].icon 
   })
   
  }
  render() {
      return (
          <div className="cards">
          <Weather weathericon={this.state.weathericon} city={this.state.city} country={this.state.country}/>             
          </div>
      )
  }
}
export default SearchResultComponent;