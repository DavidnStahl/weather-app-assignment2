import React from 'react'
import SetDescriptionPicture from './setDescriptionPicture';

function fiveWeatherDaysInformation(props) {
    return (
        <div class="float-left text-center col px-md-3">
            <h5>{props.date}</h5>
                    <h5 className="py-8">
                    <SetDescriptionPicture picture={props.weathericon}/>                    
                    </h5>
                    <h5 className="py-2">{props.temp}&deg;</h5>
                    <h5 className="py-3">
                      {props.description}
                    </h5>
        </div>
    )
}
export default fiveWeatherDaysInformation
