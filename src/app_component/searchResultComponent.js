import React, { Component } from 'react';
import Weather from './weather';
import FiveWeatherDaysInformation from './fiveWeatherDaysInformation.js';


class SearchResultComponent extends Component {
  constructor(){
    super();
    this.state = { 
      city:'Stockholm',
      country:undefined,
      temp: undefined,
      tempMin:undefined,
      tempMax:undefined,
      description:undefined,
      weathericon:undefined,
      itemArray: [],
      fiveDayForecast1:{},
      fiveDayForecast2:{},
      fiveDayForecast3:{},
      fiveDayForecast4:{},
      fiveDayForecast5:{}
    };
    this.getWeather();
    
  }

  showMoreInfo(){
    if(this.state.itemArray.length > 0){
      return
    }
    else{
      const item = this.state.itemArray;
      item.push(
      <React.Fragment><FiveWeatherDaysInformation description={this.state.fiveDayForecast1.description}temp={this.state.fiveDayForecast1.temp}   weathericon={this.state.fiveDayForecast1.weathericon} city={this.state.city} date={this.state.fiveDayForecast1.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast2.description} temp={this.state.fiveDayForecast2.temp}  weathericon={this.state.fiveDayForecast2.weathericon} city={this.state.city} date={this.state.fiveDayForecast2.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast3.description} temp={this.state.fiveDayForecast3.temp}  weathericon={this.state.fiveDayForecast3.weathericon} city={this.state.city} date={this.state.fiveDayForecast3.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast4.description} temp={this.state.fiveDayForecast4.temp}  weathericon={this.state.fiveDayForecast4.weathericon} city={this.state.city} date={this.state.fiveDayForecast4.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast5.description} temp={this.state.fiveDayForecast5.temp}  weathericon={this.state.fiveDayForecast5.weathericon} city={this.state.city} date={this.state.fiveDayForecast5.date}/>
      </React.Fragment>)
  
    this.setState({itemArray: item})
    }
       
  }

  showNoMoreInfo(){
    this.setState({itemArray: []})
  }

  getWeather = async () => {
  const API_Key = "d8f0bc5b04e20b0c7533536f49160c54"
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${this.state.city}&units=metric&appid=${API_Key}`)
   const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_Key}`)
   const api_call_5dayForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${API_Key}`)
   
   
   const response = await api_call.json();
   const response2 = await api_call2.json();
   const response5dayForecast = await api_call_5dayForecast.json();
   
  
   this.setState({
     city: response.list[0].name,
     country: response.list[0].sys.country,
     temp: response.list[0].main.temp.toFixed(1),
     tempMin: response.list[0].main.temp_min.toFixed(1),
     tempMax: response.list[0].main.temp_max.toFixed(1),
     description: response2.weather[0].description,
     weathericon: response2.weather[0].icon,
     fiveDayForecast1: {
      city: response.list[0].name,
      date: response5dayForecast.list[7].dt_txt,
      temp: response5dayForecast.list[7].main.temp.toFixed(1),
      description: response5dayForecast.list[7].weather[0].description,
      weathericon: response5dayForecast.list[7].weather[0].icon
     },
     fiveDayForecast2: {
      city: response.list[0].name,
      date: response5dayForecast.list[15].dt_txt,
      temp: response5dayForecast.list[15].main.temp.toFixed(1),
      description: response5dayForecast.list[15].weather[0].description,
      weathericon: response5dayForecast.list[15].weather[0].icon
     },
     fiveDayForecast3: {
      city: response.list[0].name,
      date: response5dayForecast.list[23].dt_txt,
      temp: response5dayForecast.list[23].main.temp.toFixed(1),
      description: response5dayForecast.list[23].weather[0].description,
      weathericon: response5dayForecast.list[23].weather[0].icon
     },
     fiveDayForecast4: {
      city: response.list[0].name,
      date: response5dayForecast.list[30].dt_txt,
      temp: response5dayForecast.list[30].main.temp.toFixed(1),
      description: response5dayForecast.list[30].weather[0].description,
      weathericon: response5dayForecast.list[30].weather[0].icon
     },
     fiveDayForecast5: {
      city: response.list[0].name,
      date: response5dayForecast.list[38].dt_txt,
      temp: response5dayForecast.list[38].main.temp.toFixed(1),
      description: response5dayForecast.list[38].weather[0].description,
      weathericon: response5dayForecast.list[38].weather[0].icon
     }
   })
  }

  
  render() {
      return (
          <div className="container-fluid">
          <Weather description={this.state.description}temp={this.state.temp} tempMin={this.state.tempMin} tempMax={this.state.tempMax} weathericon={this.state.weathericon} city={this.state.city} country={this.state.country}/>
          <div class="row mx-md-n5"><div className="float-left text-center  col px-md-3">
          <button class="btn btn-info" onClick={this.showMoreInfo.bind(this)}>Show 5 day info</button>
          <div className="float-left text-center col px-md-3"></div>
          <button class="btn btn-dark"  onClick={this.showNoMoreInfo.bind(this)}>Go back</button>
          </div>
          </div>
          {this.state.itemArray.map((item) => {
            return <div className="row mx-md-n5 m-5"  >{item}</div>
          })}            
          </div>
      )
  }
}

export default SearchResultComponent;