import React from 'react'
import SetDescriptionPicture from './setDescriptionPicture';
import MinmaxTemp from './MinmaxTemp';


export default function weather(props){
        return (
            <div>
                <div className="container text-center">
                  <div className ="cards m-5">
                    <h3>{props.city}, {props.country}</h3>
                    <h4> Time:  {props.time}</h4>
                    <h3 className="py-8">
                    <SetDescriptionPicture picture={props.weathericon}/>                    
                    </h3>
                    <h3 className="py-2">{props.temp}&deg;</h3>
                    <MinmaxTemp min={props.tempMin} max={props.tempMax} />
                    <h4 className="py-3">
                      {props.description}
                    </h4>
                  </div>
                </div>
            </div>
        )
    }

