import React, { Component } from 'react';
import Weather from './weather';
import FiveWeatherDaysInformation from './fiveWeatherDaysInformation.js';
import Form from './Form';


class SearchResultComponent extends Component {
  constructor(){
    super();
    this.state = {
      lat: "",
      lon: "",
      saveButton: "No",
      weekday: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],    
      city:'Stockholm',
      errorMessage: "",
      country:undefined,
      temp: undefined,
      tempMin:undefined,
      tempMax:undefined,
      description:undefined,
      weathericon:undefined,
      itemArray: [],
      buttonText: "Show five day forecast",
      fiveDayForecast1:{},
      fiveDayForecast2:{},
      fiveDayForecast3:{},
      fiveDayForecast4:{},
      fiveDayForecast5:{}
    };
    this.setGeoLocation();
    this.getGeoLocationWeather(this.state.city);
  }
  setGeoLocation(){
    
  navigator.geolocation.getCurrentPosition(position => {
    
    this.setState({
      lat: Number(position.coords.latitude).toFixed(3),
      lon: Number(position.coords.longitude).toFixed(3)
    })
    this.getGeoWeather();
  })
  }

  showMoreInfo(){
    if(this.state.itemArray.length > 0){
      this.setState({
        itemArray: [],
        buttonText: "Show five day forecast"
      })
      return
    }
    else{
      const item = this.state.itemArray;
      item.push(
      <React.Fragment>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast1.description} temp={this.state.fiveDayForecast1.temp}   weathericon={this.state.fiveDayForecast1.weathericon} city={this.state.city} date={this.state.fiveDayForecast1.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast2.description} temp={this.state.fiveDayForecast2.temp}  weathericon={this.state.fiveDayForecast2.weathericon} city={this.state.city} date={this.state.fiveDayForecast2.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast3.description} temp={this.state.fiveDayForecast3.temp}  weathericon={this.state.fiveDayForecast3.weathericon} city={this.state.city} date={this.state.fiveDayForecast3.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast4.description} temp={this.state.fiveDayForecast4.temp}  weathericon={this.state.fiveDayForecast4.weathericon} city={this.state.city} date={this.state.fiveDayForecast4.date}/>
      <FiveWeatherDaysInformation description={this.state.fiveDayForecast5.description} temp={this.state.fiveDayForecast5.temp}  weathericon={this.state.fiveDayForecast5.weathericon} city={this.state.city} date={this.state.fiveDayForecast5.date}/>
      </React.Fragment>)
  
    this.setState({
      itemArray: item,
      buttonText: "Hide"

    })
    }      
  }

  getGeoWeather = async () => {
    let API_Key = "d8f0bc5b04e20b0c7533536f49160c54" 
    
    let geolocationresponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${API_Key}`)
                                     .then( res => {if(!res.ok) {this.setState({errorMessage: "Can´t find city",})
                                     throw res }this.setState({errorMessage: ""})
                                     return res.json()})
                                     console.log(geolocationresponse)
    let nameArr = geolocationresponse.name.split(" ")
    this.setState({
      city:nameArr[0]

    })
    await this.getGeoLocationWeather(this.state.city)
  }
  
  getGeoLocationWeather = async (city) => {

  let API_Key = "d8f0bc5b04e20b0c7533536f49160c54"
  
  let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${API_Key}`)
                         .then( res => {if(!res.ok) {this.setState({errorMessage: "Can´t find city",})
                               throw res }this.setState({errorMessage: ""})
                               return res.json()})
  let response2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
                          .then( res => {if(!res.ok) { throw res }
                            return res.json();})
  let response5dayForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_Key}`)
                                    .then( res => {if(!res.ok) { throw res }
                                      return res.json();});

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
        date: this.state.weekday[new Date(response5dayForecast.list[7].dt_txt).getDay()],
        temp: response5dayForecast.list[7].main.temp.toFixed(1),
        tempMin: response5dayForecast.list[7].main.temp_min.toFixed(1),
        tempMax: response5dayForecast.list[7].main.temp_max.toFixed(1),
        description: response5dayForecast.list[7].weather[0].description,
        weathericon: response5dayForecast.list[7].weather[0].icon
       },
       fiveDayForecast2: {
        city: response.list[0].name,
        date: this.state.weekday[new Date(response5dayForecast.list[15].dt_txt).getDay()],
        temp: response5dayForecast.list[15].main.temp.toFixed(1),
        tempMin: response5dayForecast.list[15].main.temp_min.toFixed(1),
        tempMax: response5dayForecast.list[15].main.temp_max.toFixed(1),
        description: response5dayForecast.list[15].weather[0].description,
        weathericon: response5dayForecast.list[15].weather[0].icon
       },
       fiveDayForecast3: {
        city: response.list[0].name,
        date: this.state.weekday[new Date(response5dayForecast.list[23].dt_txt).getDay()],
        temp: response5dayForecast.list[23].main.temp.toFixed(1),
        tempMin: response5dayForecast.list[23].main.temp_min.toFixed(1),
        tempMax: response5dayForecast.list[23].main.temp_max.toFixed(1),
        description: response5dayForecast.list[23].weather[0].description,
        weathericon: response5dayForecast.list[23].weather[0].icon
       },
       fiveDayForecast4: {
        city: response.list[0].name,
        date: this.state.weekday[new Date(response5dayForecast.list[31].dt_txt).getDay()],
        temp: response5dayForecast.list[31].main.temp.toFixed(1),
        tempMin: response5dayForecast.list[31].main.temp_min.toFixed(1),
        tempMax: response5dayForecast.list[31].main.temp_max.toFixed(1),
        description: response5dayForecast.list[31].weather[0].description,
        weathericon: response5dayForecast.list[31].weather[0].icon
       },
       fiveDayForecast5: {
        city: response.list[0].name,
        date: this.state.weekday[new Date(response5dayForecast.list[39].dt_txt).getDay()],
        temp: response5dayForecast.list[39].main.temp.toFixed(1),
        tempMin: response5dayForecast.list[39].main.temp_min.toFixed(1),
        tempMax: response5dayForecast.list[39].main.temp_max.toFixed(1),
        description: response5dayForecast.list[39].weather[0].description,
        weathericon: response5dayForecast.list[39].weather[0].icon
       }
  })
}
  getWeather = async (e) => {
  e.preventDefault();
  let city = e.target.elements.city.value
  await this.getGeoLocationWeather(city)
    if(this.state.errorMessage === ""){
      this.setState({saveButton: "Yes"})
    }
    this.setState({
      itemArray: [],
      buttonText: "Show five day forecast"
    })
  }
  render() {
      return (
          <div className="container-fluid">
          <Form placeholderinput={this.state.errorMessage} savecity={this.state.city} loadweather={this.getWeather} buttonsave={this.state.saveButton}/>
          <Weather  tempMax={this.state.tempMax} tempMin={this.state.tempMin} description={this.state.description}temp={this.state.temp} weathericon={this.state.weathericon} city={this.state.city} country={this.state.country}/>
          <div className="row mx-md-n5"><div className="float-left text-center  col px-md-3">
          <button className="btn btn-warning" onClick={this.showMoreInfo.bind(this)}>{this.state.buttonText}</button>
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