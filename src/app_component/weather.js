import React from 'react'



export default function weather(props){
        return (
            <div>
                <div className="container text-center">
                  <div className ="cards">
                    <h1>{props.city}, {props.country}</h1>
                    <h5 className="py-4">
                    {setDescriptionPicture(props.weathericon)}                    
                    </h5>
                    <h1 className="py-2">25&deg;</h1>
                    {minmaxTemp(24,19)}
                    <h4 className="py-3">
                      Sunny
                    </h4>
                  </div>
                </div>
            </div>
        )
    }
function minmaxTemp(min,max){
  return(
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  )
}
function setDescriptionPicture(description){
  let iconurl = `http://openweathermap.org/img/wn/${description}@2x.png`

  return(
    <img src={iconurl} alt="Sunny" height="52" width="52"></img>
  )
}
