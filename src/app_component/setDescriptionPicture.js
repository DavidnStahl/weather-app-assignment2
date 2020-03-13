import React from 'react'

function setDescriptionPicture(props) {
    let iconurl = `http://openweathermap.org/img/wn/${props.picture}@2x.png`
    return (<img src={iconurl} alt="Sunny" height="100" width="100"></img>)
}

export default setDescriptionPicture
